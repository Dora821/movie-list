import IndividualMovie from './IndividualMovie.jsx';
import React from 'react';
class MovieList extends React.Component {
  constructor(props) {
    super(props);
  }

  // MovieToRender() {
  //   console.log('this.props.searchedMovie', this.props.searchedMovie);
  //   if (this.props.searchedMovie) {
  //     this.setState({movieRender: [...this.props.searchedMovie]});
  // //   } else if(this.state.watchClick) {
  // //     this.setState({movieRender: [...this.state.watchedMovie]});
  // //   } else if(this.state.toWatchClicked) {
  // //     this.setState({movieRender: [...this.state.toWatchMovies]});
  //   } else {
  //     this.setState({movieRender: [...this.props.allMovies]});
  //   }

  //   return this.state.movieRender;
  // }

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