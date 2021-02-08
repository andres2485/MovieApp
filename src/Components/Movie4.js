import React from 'react'




const img_api = "https://image.tmdb.org/t/p/w1280";


export const Movie4 = ({ title, poster_path, overview, vote_average, release_date, original_language }) => (


    <div className="movie">

        <img src={img_api + poster_path} alt={title} />

        <div className="movie-info">

            <h3>{title}</h3>
            <span>{vote_average}</span>

        </div>

        <div className="movie-over">

            <h4><strong>Información</strong></h4>

            <hr />
            <p><strong>Título</strong></p>
            <p>{title}</p>
            <hr />
            <p><strong>Año</strong></p>
            <p>{release_date}</p>
            <hr />
            <p><strong>Lenguaje</strong></p>
            <p>{original_language}</p>
            <hr />
            <p><strong>Resumen</strong></p>
            <p>{overview}</p>



        </div>

    </div>




)
