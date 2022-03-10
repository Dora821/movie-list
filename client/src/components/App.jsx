import React from 'react';
import movieListData from '../data/movieListData.js';
import MovieList from './MovieList.jsx';
import SearchBar from './search.jsx';
import AddMovie from './AddMovie.jsx';

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
 }

// Addmovie function to add userinput movie to the movielist
userAddMovie() {
  console.log('user Add clicked');
  var movieName = document.querySelector('.add-your-movie').value;
  for (var obj of this.state.allTheMovies) {
    if (obj.title === movieName) {
      alert("Movie has been added");
      return;
    }
  }
  // console.log("Add movie");
  var updatedArr = [...this.state.allTheMovies, {'title': movieName}];
    // console.log([...updatedArr]);
  this.setState({allTheMovies: updatedArr, movieToRender: updatedArr});
  movieName = '';
};

//  when search bar button is clicked, if there is a movie matching with the input (partially),
// set current movie with that selected movie and pass down to movie list, otherwise pop a message

handleSearchClick() {
  console.log('SearchButton Clicked');
  var keyWord =  document.querySelector('.form-control').value;
  var searchedMovie = this.state.allTheMovies.filter((object) => object.title.includes(keyWord));
  console.log('SearchedMovie', [...searchedMovie]);
  if (searchedMovie.length === 0) {
    alert("sorry, the movie is not available");
  }
  //  if no current movie is selected, pop a window to indicate no movie in data base
  this.setState({movieToRender: searchedMovie});
};


// mark movies watchedList tobe true when clicking the wacthed button on each individual movie
addMovieToWatched(event) {
  console.log("i am adding movie to watched list");
  // var currentWatchList = [];
  var watchedMovie=event.target.previousElementSibling.innerHTML;
  // console.log('watchedMovie '+ watchedMovie);
  // currentWatchList.push({"title":watchedMovie});
  var newWatchList = [...this.state.watchedList, watchedMovie];
  this.setState({watchedList: newWatchList});
  console.log('this.state.watchedList', this.state.watchedList);
}

// When watched button is clicked, only surrender the movies in the watched list to the DOM
watchedButtonClicked() {
  console.log('watchedButtonClicked')
  var renderList = this.state.allTheMovies.filter((obj) => (this.state.watchedList.includes(obj.title)));
  console.log("renderList" + [...renderList])
  this.setState({movieToRender: renderList});
}

toWatchButtonClicked() {
  console.log('this', this);
  console.log('this.allMovies, ', this.state.allMovies);
  // console.log("this.state.watchedList" + [...this.state.watchedList]);
  var renderList = this.state.allTheMovies.filter((obj) => (!this.state.watchedList.includes(obj.title)));
  this.setState({movieToRender: renderList});
};

 render() {
   return (
     <div>
      <div className="add-movie-section">
        <AddMovie addButtonClick={this.userAddMovie.bind(this)}/>
      </div>
      <div className="search-bar">
        <SearchBar buttonClick={this.handleSearchClick.bind(this)}/>
      </div>
      <div className="movie-list-bundle">
        <MovieList allMovies={this.state.movieToRender} singleMovieWatch={this.addMovieToWatched} watchButton={this.watchedButtonClicked} toWacthButton={this.toWatchButtonClicked}/>
      </div>
     </div> );
  };
}


export default App;