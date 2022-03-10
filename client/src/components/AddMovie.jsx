import React from 'react';
var AddMovie = (props) => {
  return (
    <div className="add-movie_section">
      <input className="add-your-movie"></input>
      <button onClick={props.addButtonClick} className="add-your-movie-button">Add</button>
    </div>
  );
}

export default AddMovie;