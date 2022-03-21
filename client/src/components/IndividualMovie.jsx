import React from 'react';
import InfoPanel from './InfoPanel.jsx';
import {getMovieInformation, searchMovie} from './SearchMovie.js';

class IndividualMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {selectedInfo: false, watched:false};
    this.titleClick = this.titleClick.bind(this);
    this.addMovieToWatchedList = this.addMovieToWatchedList.bind(this)
  }

  // getInfoCallback(result) {
  //   console.log(result);
  //   if (result.data.length > 1) {
  //     var target = result.data.filter((item) => (item.name === this.props.eachMovie.name));
  //     this.setState({selectedMovie: target[0]});
  //   } else {
  //     this.setState({selectedMovie: result.data[0]});
  //   }
  //   // console.log("this.state.selectedMovie", this.state.selectedMovie);
  // }
  addMovieToWatchedList() {
    this.props.watchedMovie(this.props.eachMovie);
  }

  titleClick(event) {
    var movieTitle = this.props.eachMovie.name;
    console.log(movieTitle);
    // searchMovie(movieTitle, this.getInfoCallback);
    this.setState({selectedInfo: !this.state.selectedInfo})
  }


  // console.log('individual click watch' + props.watchClicker);
  render() {
    return (
    <div className="single-movie-entry">
      <div className='movieTitle' onClick={this.titleClick}>{this.props.eachMovie.name}</div>
      <InfoPanel eachMovie={this.props.eachMovie} trigger={this.state.selectedInfo} watchMovieBtn={this.addMovieToWatchedList}/>
      <div className='MovieDescription'></div>
    </div>
    );
  }
}

export default IndividualMovie;