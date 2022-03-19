var connection = require('../database/index.js');

module.exports = {
  getAll: function(title, callback) {
    if (title === undefined) {
      var queryStr = 'SELECT * FROM movies;';
    } else {
      var queryStr = 'SELECT * FROM movies WHERE name LIKE ' % title % ';';
    }
    connection.query(queryStr, (err, data) => {
      if (err) {
        callback(err);
      } else {
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
  postOneData: function(obj) {
    let queryArgs = [obj.name, obj.description, obj.year, obj.score];
    let queryStr = 'INSERT INTO movies (name, description, year, score) VALUES (?, ?, ?, ?);';
    connection.query(queryStr, queryArgs, (err, data) => {
      if (err) {
        console.log('error occurs when inserting data');
      } else {
        console.log('movies have been posted into database');
      }
    });
  }
};