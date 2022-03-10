import React from 'react';
import movieListData from '../data/movieListData.js';
import MovieList from './MovieList.jsx';
import SearchBar from './search.jsx';
import AddMovie from './AddMovie.jsx';

console.log(movieListData);
class App extends React.Component {
 constructor(props) {
   super(props);
   this.state = {allMovies: [], searchedMovie: null}
 }

// Addmovie function to add userinput movie to the movielist
userAddMovie() {
  // console.log('user Add clicked');
  var movieName = document.querySelector('.add-your-movie').value;
  for (var obj of this.state.allMovies) {
    if (obj.title === movieName) {
      alert("Movie has been added");
      return;
    }
  }
  console.log("movie does not exist");
  var updatedArr = [...this.state.allMovies, {'title': movieName}];
    // console.log([...updatedArr]);
  this.setState({allMovies: updatedArr});
};

//  when search bar button is clicked, if there is a movie matching with the input (partially),
// set current movie with that selected movie and pass down to movie list, otherwise pop a message

handleSearchClick() {
  console.log('clicked');
  var keyWord =  document.querySelector('.form-control').value;
  // document.querySelector('.form-control').value = '';
  for (var anyMovie of this.state.allMovies) {
    if (anyMovie.title.indexOf(keyWord) > -1) {
      this.setState({searchedMovie:[anyMovie]});
      return;
    }
  };
  //  if no current movie is selected, pop a window to indicate no movie in data base
  alert("sorry, the movie is not available");
};


// Add movies to watchedList when clicking the wacthed button on each individual movie


// When watched button is clicked, only surrender the movies in the watched list to the DOM


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
        <MovieList allMovies={this.state.allMovies} searchRes={this.state.searchedMovie}/>
      </div>
     </div> );
  };
}


export default App;