var connection = require('../database/index.js');

module.exports = {
  getAll: function(callback) {
    var queryStr = 'SELECT * FROM movies;';
    connection.query(queryStr, (err, data) => {
      if (err) {
        callback(err);
      } else {
        callback(null, data);
      }
    });
  },
  getOne: function(title, callback) {
    console.log('title', title);
    var queryStr = 'SELECT * FROM movies WHERE name LIKE "%' + title + '%";';
    connection.query(queryStr, (err, data) => {
      if (err) {
        console.log(err);
        callback(err);
      } else {
        console.log('searched movie', data);
        callback(null, data);
      }
    });
  },
  AddArrayOfData: function(arr) {
    arr.forEeach((obj) => {
      let queryArgs = [obj.name, obj.description, obj.year, obj.score];
      let queryStr = 'INSERT INTO movies (name, description, year, score) VALUES (?, ?, ?, ?);';
      connection.query(queryStr, queryArgs, (err, data) => {
        if (err) {
          console.log('error occurs when inserting data');
        } else {
          console.log('movies have been posted into database');
        }
      });
    });
  },
  postOne: function(obj, callback) {
    let queryArgs = [obj.name, obj.description, obj.year, obj.score];
    let queryStr = 'INSERT INTO movies (name, description, year, score) VALUES (?, ?, ?, ?);';
    connection.query(queryStr, queryArgs, (err, data) => {
      if (err) {
        console.log('error occurs when inserting data');
      } else {
        console.log('movies have been posted into database');
        callback(null, data);
      }
    });
  }
};