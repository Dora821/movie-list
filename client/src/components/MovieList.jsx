import IndividualMovie from './IndividualMovie.jsx';
import React from 'react';
class MovieList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    <div className="movie-list">
      <button className="watched-btn" onClick= {this.props.watchButton}>Watched</button>
      <button className="to-watch-btn" onClick = {this.props.toWacthButton}>To Watch</button>
      <div className="movie-list-body">
        {(this.props.allMovies).map(eachMovie => <IndividualMovie watchedMovie={this.props.singleMovieWatch} eachMovie={eachMovie}/>)}
      </div>
    </div>
    )
  }
};

export default MovieList;