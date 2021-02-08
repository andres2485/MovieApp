import React, { useState } from 'react'
import swal from 'sweetalert';
import axios from 'axios'


export const Registrar = () => {




  const [state, setstate] = useState({

    email: '',
    password: ''

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

        title: "Cuenta Creada ",
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
    <div className="container ">



      <button type="button" className="btn btn-success my-5 btregistra animated fadeInDown" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Registrarse</button>
      <br />
      <a href="./Login" className="btn btn-success my-4 mx-6 btregistra animated fadeInDown">Volver atras</a>
      <div className="modal fade animated fadeInDown" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Registrarse</h5>

              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>


            <div className="modal-body">




              <form onSubmit={enviaDatos}>
                <div className="mb-3">
                  <label className="col-form-label" ></label>
                  <input
                    type="email" name="email" className="form-control registraInput" id="recipient-name" value={email} required onChange={chandgeHandler}
                    placeholder="Email"></input>/


          </div>
                <div className="mb-3">
                  <label className="col-form-label"></label>

                  <input
                    type="password" name="password" className="form-control registraInput" id="message-text" value={password} required onChange={chandgeHandler}
                    placeholder="Password">

                  </input>







                </div>
              </form>
            </div>
            <div className="modal-footer">

              <button type="submit" id="btnCrear" className="btn btn-success " onClick={() => creaUser()}>Crear Cuenta</button>

              <br />

            </div>
          </div>
        </div>
      </div>

    </div>


  )
}
