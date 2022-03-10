import React from 'react';
var IndividualMovie = function(props) {
  // console.log('individual click watch' + props.watchClicker);
  return (
    <div className="single-movie-entry">
      <div className='movieTitle'>{props.eachMovie.title}</div>
      <button onClick= {props.watchedMovie} className="watch-status-btn" id="watched-btn">watched</button>
      <div className='MovieDescription'></div>
    </div>
  );
};

export default IndividualMovie;