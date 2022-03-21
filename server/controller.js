var models = require('./models.js');
var express = require('express');

module.exports = {
  getAll: function(req, res) {
    models.getAll((err, data) => {
      if (err) {
        console.log('can not retrieve movie information');
      } else {
        res.send(data);
      }
    });
  },
  getOne: function(req, res) {
    var searchedTitle = req.query.query;
    console.log('searchedTitle', searchedTitle);
    models.getOne(searchedTitle, (err, data) => {
      if (err) {
        console.log('can not retrieve movie information');
      } else {
        res.json(data);
      }
    });
  },
  postOne: function(req, res) {
    var movieToPost = req.body;
    console.log('movieToPost', JSON.stringify(movieToPost));
    models.postOne(movieToPost, (err, data) => {
      if (err) {
        console.log('post err', err);
      } else {
        res.json(movieToPost);
      }
    });
  }
};