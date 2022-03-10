import IndividualMovie from './IndividualMovie.jsx';
import React from 'react';
class MovieList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {movieRender:[], WatchedMovies:[], toWatchMovies:[], watchClick: false, toWatchClicked:false};
  }

  addMovieToWatched(event) {
    console.log("i am adding movie to watched list");
    // var currentWatchList = [];
    var watchedMovie=event.target.previousElementSibling.innerHTML;
    // console.log('watchedMovie '+ watchedMovie);
    // currentWatchList.push({"title":watchedMovie});
    var newWatchList = [...this.state.WatchedMovies, {"title":watchedMovie}];
    this.setState({watchedList: newWatchList});
    console.log('this.state.watchedList', this.state.watchedList);
  }

  watchedButtonClicked() {
    console.log('watchedBtn clicked');
    this.setState({movieTorender: this.state.WatchedMovies});
  }

  toWatchButtonClicked() {
    console.log('this', this);
    console.log('this.allMovies, ', this.state.allMovies);
    // console.log("this.state.watchedList" + [...this.state.watchedList]);
    if (this.state.watchedList.length > 0) {
      var toWatchMovies = this.state.allMovies.filter(x => this.state.watchedList.includes(x));
      console.log('toWatchMovies', toWatchMovies);
      this.setState({toWatchList: toWatchMovies});
    }
  }

  // MovieToRender() {
  //   console.log('this.props.searchedMovie', this.props.searchedMovie);
  //   if (this.props.searchedMovie) {
  //     this.setState({movieRender: [...this.props.searchedMovie]});
  //   } else if(this.state.watchClick) {
  //     this.setState({movieRender: [...this.state.watchedMovie]});
  //   } else if(this.state.toWatchClicked) {
  //     this.setState({movieRender: [...this.state.toWatchMovies]});
  //   } else {
  //     this.setState({movieRender: [...this.props.allMovies]});
  //   }

  //   return this.state.movieRender;
  // }

  render() {
    return (
    <div className="movie-list">
      <button className="watched-btn" onClick= {this.watchedButtonClicked.bind(this)}>Watched</button>
      <button className="to-watch-btn" onClick = {this.props.addToWatchBtn}>To Watch</button>
      <div className="movie-list-body">
        {(this.MovieToRender()).map(eachMovie => <IndividualMovie eachMovie={eachMovie}/>)}
      </div>
    </div>
    )
  }
};

export default MovieList;