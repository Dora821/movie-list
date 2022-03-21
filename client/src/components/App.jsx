import React from 'react';
import movieListData from '../data/movieListData.js';
import MovieList from './MovieList.jsx';
import SearchBar from './search.jsx';
import AddMovie from './AddMovie.jsx';
import axios from 'axios';
import {getMovieInformation, searchMovie, getAllMovie, postMovieToDataBase} from './SearchMovie.js';

// console.log(movieListData);
class App extends React.Component {
 constructor(props) {
   super(props);
   this.state = {allTheMovies: [], watchedList:[], movieToRender: []};
   this.userAddMovie = this.userAddMovie.bind(this);
   this.handleSearchClick = this.handleSearchClick.bind(this);
   this.watchedButtonClicked = this.watchedButtonClicked.bind(this);
   this.toWatchButtonClicked = this.toWatchButtonClicked.bind(this);
   this.addMovieToWatched = this.addMovieToWatched.bind(this);
   this.renderAllMovies = this.renderAllMovies.bind(this);
  //  this.getMovieInfo = this.getMovieInfo.bind(this);
  //  getMovieInformation(this.getMovieInfo);
  //  this.renderMovie();

 }

//  getMovieInfoHandler(event) {
//      let movieInfoTitle = event.target.value;
//      getMovieInformation(movieInfoTitle, )

//  }

// set initial rendering
componentDidMount() {
  this.renderAllMovies();
};

//get All movie from current databse
renderAllMovies() {
  getAllMovie((data)=>{
    // console.log('allMovies', data);
    this.setState({allTheMovies: data, movieToRender: data});
  });
}

// Addmovie function to add userinput movie to the movielist
userAddMovie() {
  console.log('user Add clicked');
  var movieName = document.querySelector('.add-your-movie').value;
  console.log('movieName', movieName);
  postMovieToDataBase(movieName, (data)=>{this.setState({allTheMovies: [...this.state.allTheMovies, data], movieToRender: [this.state.movieToRender, data]})});
  // this.setState({allTheMovies: updatedArr, movieToRender: updatedArr, selectedInfo: false});
  // movieName = '';
};

handleSearchClick() {
  console.log('SearchButton Clicked');
  var keyWord =  document.querySelector('.form-control').value;
  console.log('keyWord:', keyWord);
  searchMovie(keyWord, (result) => {
    if (result.data.length>0) {
      this.setState({movieToRender: result.data})
    } else {
      alert('Movie is not in database');
    }
  })

  //  if no current movie is selected, pop a window to indicate no movie in data base
};




// mark movies watchedList tobe true when clicking the wacthed button on each individual movie
addMovieToWatched(watcheMovie) {

  // console.log('watchedMovie '+ watchedMovie);
  // currentWatchList.push({"title":watchedMovie});
  var newWatchList = [...this.state.watchedList, watcheMovie];
  this.setState({watchedList: newWatchList});
  console.log('this.state.watchedList', this.state.watchedList);
}

// When watched button is clicked, only surrender the movies in the watched list to the DOM
watchedButtonClicked() {
  // console.log('watchedButtonClicked')
  this.setState({movieToRender: this.state.watchedList});
}

toWatchButtonClicked() {
  // console.log('this', this);
  // console.log('this.allMovies, ', this.state.allMovies);
  // console.log("this.state.watchedList" + [...this.state.watchedList]);
  var renderList = this.state.allTheMovies.filter((obj) => (!this.state.watchedList.includes(obj)));
  this.setState({movieToRender: renderList});
};

 render() {
   return (
     <div>
      <div className="add-movie-section">
        <AddMovie addButtonClick={this.userAddMovie}/>
      </div>
      <div className="search-bar">
        <SearchBar buttonClick={this.handleSearchClick}/>
      </div>
      <button className='all-movie-btn' onClick={this.renderAllMovies}>All Movies</button>
      <div className="movie-list-bundle">
        <MovieList allMovies={this.state.movieToRender} singleMovieWatch={this.addMovieToWatched} watchButton={this.watchedButtonClicked} toWacthButton={this.toWatchButtonClicked}/>
      </div>
     </div> );
  };
}


export default App;