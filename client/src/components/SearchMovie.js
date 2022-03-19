import {API_KEY} from '../config/config.js';
const axios = require('axios');

const getMovieInformation = (title, callback) => {

  axios.get('https://api.themoviedb.org/3/search/movie', {params: {
    api_key:API_KEY,
    query:title
  }})
  .then(response => {callback(response.data.results)})
  .catch(error => {
    console.error("Can't get movie information")
  })
//
// axios.get('/api/movies')
//   .then(response => {callback(response.data)})
//   .catch(error => {
//     console.log("Can't get movie information", error);
//   })
};
export default getMovieInformation;