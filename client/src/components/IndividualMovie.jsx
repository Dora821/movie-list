import React from 'react';
import InfoPanel from './InfoPanel.jsx';
import getMovieInformation from './SearchMovie.js';

class IndividualMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {selectedInfo: false, selectedMovie: null};
    this.titleClick = this.titleClick.bind(this);
    this.getInfoCallback = this.getInfoCallback.bind(this);

  }

  getInfoCallback(data) {
    console.log(data);
    if (data.length > 1) {
      var target = data.filter((item) => (item.title === this.props.eachMovie.title));
      this.setState({selectedMovie: target[0]});
    } else {
      this.setState({selectedMovie: data[0]});
    }
    // console.log("this.state.selectedMovie", this.state.selectedMovie);
  }

  titleClick(event) {
    var movieTitle = this.props.eachMovie.title;
    console.log(movieTitle);
    getMovieInformation(movieTitle, this.getInfoCallback);
    this.setState({selectedInfo: !this.state.selectedInfo})
  }


  // console.log('individual click watch' + props.watchClicker);
  render() {
    return (
    <div className="single-movie-entry">
      <div className='movieTitle' onClick={this.titleClick}>{this.props.eachMovie.title}</div>
      <InfoPanel eachMovie={this.props.eachMovie} selectedMovie={this.state.selectedMovie} trigger={this.state.selectedInfo} watchMovieBtn={this.props.watchedMovie}/>
      <div className='MovieDescription'></div>
    </div>
    );
  }
}

export default IndividualMovie;