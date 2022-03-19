import React from 'react';
var InfoPanel = (props) => {
  return (
    <div>
      {props.trigger && props.selectedMovie &&
          <div className="movie-pop-up">
            <span className="pop-up-title">{props.eachMovie.title}</span>
            <button onClick= {props.watchMovieBtn} className="watch-status-btn" id="watched-btn">watched</button>
            <span className="pop-up-year">Year: {props.selectedMovie.release_date}</span>
            <span className="pop-up-score">Overview: {props.selectedMovie.overview}</span>
            <span className="pop-up-rating">Metascore: {props.selectedMovie.vote_average}</span>
            <span className="pop-up-score">imdbRating: {props.selectedMovie.vote_score}</span>
            <span className="pop-up-score">Watched</span>
          </div>
      }
    </div>
  );
};
export default InfoPanel;