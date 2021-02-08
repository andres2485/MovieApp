import React, { useState, useEffect } from 'react';

import { Paginacion } from '../Components/Paginacion';
import { Movie5 } from '../Components/Movie5';



const api = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=5";

const search_api = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";




export const App5 = () => {


  const [movies, setMovies] = useState([]);
  const [searchTerm, setsearchTerm] = useState('');

  useEffect(() => {

    fetch(api).then(res => res.json())
      .then(data => {
        console.log(data);
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
      <div className="col">


        <a href="/Home" type="button" className="btn btn-dark volverInicio animated fadeInDown">Volver a Inicio</a>

      </div>

      <br /><br />
      <div className="row logo_busca ">

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

          <Movie5 key={movie.id}


            {...movie} />)}
      </div>

      <Paginacion />


    </>
  )
}
