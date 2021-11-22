import React, { useState, useEffect } from 'react';

import {Link} from 'react-router-dom'

const Home = () => {

    const [movies, setMovies] = useState([]);


    const getMovieRequest = async () => { 
        const url = 'https://api.themoviedb.org/3/movie/popular?api_key=56bfa1ccad5ece7cce61e0ce5aa4b668&language=en-US&page=1';

        const response = await fetch(url); 
        const responseJson = await response.json(); 
        setMovies(responseJson.results);
    };

    useEffect(() => {
        getMovieRequest();
    }, []); 

	return (
		<>
        {movies && movies.map((movie => (
     
      
        <div class="card-deck d-flex justify-content-space-around" key={movie.id} style={{width:"18rem"}}>
  <div class="card">
     
  <div class="corner-ribbon top-right sticky shadow" >{movie.vote_average}</div>
      
  <Link to={`movies/${movie.id}`} img src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}>
    <img class="card-body"src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`} ></img>
    </Link>
      <p class="card-text">{movie.title}</p>
  </div>
  </div>
  
  
        )))}

       

  
       
          
		</>
	);
};

export default Home;
