import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import swal from 'sweetalert';
import axios from 'axios';






export const Login = () => {


    const [state, setstate] = useState({

        email: "eve.holt@reqres.in",
        password: 'pistola'

    })

    const { email, password } = state;


    // Funcion
    const chandgeHandler = (event) => {
        //console.log(event.target.value)
        setstate({
            ...state,
            [event.target.name]: event.target.value
        })


    }


    const creaUser = () => {


        if (email == "" || password == "") {
            swal({

                title: "Falta un dato",
                icon: "error",
                button: "ok"



            })


        } else {
            swal({

                title: "Inicio Correcto",
                icon: "success",
                button: "Aceptar"



            })

        }


    }

    const enviaDatos = (event) => {
        event.preventDefault();
        console.log(" Correo : " + state.email + " " + " Password : " + state.password)
        axios.post('https://jsonplaceholder.typicode.com/users').
            then(response => {

                console.log(response)


            })
            .catch(error => {

                console.log(error)
            })

    }

    return (
        <div>

            <div className="container animated fadeInDown">
                <div className="row content1">


                    <div className="col-md-6 ">
                        <h1 className="signin-text mb-3">Movie App</h1>
                        <br />



                        <form onSubmit={enviaDatos}>


                            <div className="form-group">

                                <label >Email</label>
                                <br /> <br />
                                <input type="email" name="email" className="form-control textos" value={email} required onChange={chandgeHandler} ></input>

                            </div>

                            <br />

                            <div className="form-group">

                                <label >Password</label>
                                <br /> <br />
                                <input type="password" name="password" className="form-control textos" value={password} required onChange={chandgeHandler} ></input>

                            </div>






                            <button type="submit" className="btn btn btnLogin" onClick={() => creaUser()}> Valida</button>

                            <a type="button" className="btn btn btnLogin" href="/Home">Ir a Home</a>
                            <br /><br />
                            <p className="registro">No tienes Cuenta ? <a href="./Registrar"> Registrate Aqui</a> </p>
                        </form>






                    </div>
                    <div className="col-md-6 mb-3">

                        <img src="avenger.jpg" className="img-fluid fotoInto" alt=""></img>


                    </div>


                </div>



            </div>
        </div>
    )
}
