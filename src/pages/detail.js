import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";

import { MovieContext } from "../context/MovieContext";



const Detail = () => {
  let { id } = useParams();
  const { showDetail, selectedMovie } = useContext(MovieContext);
  useEffect(() => {
    showDetail(id); 
  }, []);

  return (
    <div className="detail-container">
    <div className="poster">
     
    </div>
    <div className="info">
      <div className="field">
        <div className="label">
          <p className="title label-p">{selectedMovie.title}</p>
        </div>
      </div>
      <div className="field">
        <div className="label">
          <p className="label-p">{selectedMovie.overview}</p>
        </div>
      </div>
      <div className="field">
        <div className="label">
          Released: <p className="label-p">{selectedMovie.release_date}</p>
        </div>
      </div>
      
      <div className="field">
        <div className="label">
          Genre: <p className="label-p">{selectedMovie.release_date}</p>
        </div>
      </div>
      <div className="field">
        <div className="label">
          Rating: <p className="label-p">{selectedMovie.vote_average}</p>
        </div>
      </div>
      <div className="field">
        <div className="label">
          Director(s): <p className="label-p">{selectedMovie.Director}</p>
        </div>
      </div>
      <div className="field">
        <div className="label">
          Writer(s): <p className="label-p">{selectedMovie.Writer}</p>
        </div>
      </div>
     
    </div>
  </div>  );
};

export default Detail;
