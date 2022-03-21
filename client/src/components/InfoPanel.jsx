import React from 'react';
var InfoPanel = (props) => {
  return (
    <div>
      {props.trigger &&
          <div className="movie-pop-up">
            <button onClick= {props.watchMovieBtn} className="watch-status-btn" id="watched-btn">watched</button>
            <span className="pop-up-year">Year: {props.eachMovie.year}</span>
            <span className="pop-up-score">Overview: {props.eachMovie.description}</span>
            <span className="pop-up-rating">Metascore: {props.eachMovie.score}</span>
            {/* <span className="pop-up-score">imdbRating: {props.eachMovie.vote_score}</span> */}
            <span className="pop-up-score">Watched</span>
          </div>
      }
    </div>
  );
};
export default InfoPanel;