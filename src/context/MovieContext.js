import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
export const MovieContext = createContext();

const MovieApp = ({ children }) => {
   
    const [selectedMovie, setSelectedMovie] = useState('');
  
 
    const showDetail = async(id)=>{
      const url = `https://api.themoviedb.org/3/movie/?apikey=56bfa1ccad5ece7cce61e0ce5aa4b668&i=${id}`;
     const response = await fetch(url);
     const responseJson = await response.json();
     setSelectedMovie(responseJson.results);
    };



    // useEffect(() => {
      
    //   ());
     
     
      
    // }, []);
  
    return (
      <MovieContext.Provider
        value={{
          showDetail,
          selectedMovie,
        }}
      >
        {children}
      </MovieContext.Provider>
    );
  };

  export default MovieApp;