
import './App.css';
import { Movie } from './Components/Movie';
import React, { useState, useEffect } from 'react';
//import { Login } from './Components/Login';
import { Paginacion } from './Components/Paginacion';
import { Movie2 } from './Components/Movie2';
import { App2 } from './Components/App2'






/*API*/
const api = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const search_api = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";


function App() {

  const [movies, setMovies] = useState([]);
  const [searchTerm, setsearchTerm] = useState('');

  useEffect(() => {

    fetch(api).then(res => res.json())
      .then(data => {
        //   console.log(data);
        setMovies(data.results);
      });




  }, []);


  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {

      fetch(search_api + searchTerm).then(res => res.json())
        .then(data => {

          setMovies(data.results);

        });

      setsearchTerm("");
    }
  };

  const handleOnChange = (e) => {

    setsearchTerm(e.target.value);
  }

  return (

    <>


      <br /><br />
      <div className="container animated fadeInDown">
        <div className="row animated fadeInDown">
          <div className="col animated fadeInDown">

            <button type="button" className="btn btn-primary  btnHome animated fadeInDown">Home</button>


          </div>

          <div className="col">


            <a href="/Login" type="button" className="btn btn-dark cerrar animated fadeInDown">Cerrar Sesión</a>

          </div>
        </div>

      </div>

      <br />


      <div id="carouselExampleInterval" className="carousel slide slider1 animated fadeInDown" data-bs-ride="carousel">
        <div className="carousel-inner animated fadeInDown">
          <div className="carousel-item active " data-bs-interval="1500">
            <img src="matrix.jpg" className="d-block w-30" alt="..."></img>
          </div>
          <div className="carousel-item" data-bs-interval="1500">
            <img src="avenger.jpg" className="d-block w-30" alt="..."></img>
          </div>
          <div className="carousel-item" data-bs-interval="1500">
            <img src="logan.jpg" className="d-block w-30" alt="..."></img>
          </div>
          <div className="carousel-item" data-bs-interval="1500">
            <img src="woman.jpg" className="d-block w-30" alt="..."></img>
          </div>
          <div className="carousel-item" data-bs-interval="1500">
            <img src="joker.jpg" className="d-block w-30" alt="..."></img>
          </div>

        </div>
        <a className="carousel-control-prev" href="#carouselExampleInterval" role="button" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleInterval" role="button" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </a>
      </div>
      <br />

      <div className="row logo_busca  animated fadeInDown">

        <h4 >Buscador de Peliculas</h4>
      </div>

      <header>
        <form onSubmit={handleOnSubmit}>
          <input className="form-control search animated fadeInDown"
            type="search" placeholder="Buscar..."
            value={searchTerm}
            onChange={handleOnChange}
          />
        </form>
      </header>



      <div className="container movie-container animated fadeInDown">



        {movies.length > 0 && movies.map((movie) =>

          <Movie key={movie.id}


            {...movie} />)}
      </div>


      <Paginacion />


    </>
  )
}

export default App;
