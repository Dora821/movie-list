import {API_KEY} from '../config/config.js';
const axios = require('axios');

const getMovieInformation = (title, callback) => {

  axios.get('https://api.themoviedb.org/3/search/movie', {params: {
    api_key:API_KEY,
    query:title
  }})
  .then((response) => {callback(response.data.results)})
  .catch((error) => {
    console.error("Can't get movie information")
  })
//
// axios.get('/api/movies')
//   .then(response => {callback(response.data)})
//   .catch(error => {
//     console.log("Can't get movie information", error);
//   })
};

const getAllMovie = (callback) => {
  axios.get('/api/movies')
  .then((response) => {
    callback(response.data)
  })
  .catch((error) => {
      console.log("Can't get movie information", error);
  })
};

const searchMovie = (title, callback) => {
  axios.get('api/movies/search', {params: {
    query: title
  }})
  .then((data) => {callback(data)})
  .catch((err)=>{
    console.log('can not find movie in database');
  })
};

const postMovieToDataBase = (title, callback) => {
  axios.get('https://api.themoviedb.org/3/search/movie', {params: {
    api_key:API_KEY,
    query:title
  }})
  .then((response) => {
    // console.log('response', response.data.results);
    var obj = response.data.results[0];
    console.log('obj', obj);
    axios.post('api/movies', {
      name: obj.title,
      year: obj.release_date,
      description: obj.overview,
      score: obj.vote_score
  })
  .then((res)=> {
    callback(res.data);
  })
  .catch((error) => {
    console.error('can not post movie' + error);
  })
})
};


export {getMovieInformation, searchMovie, getAllMovie, postMovieToDataBase};