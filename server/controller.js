var models = require('./models.js');
var express = require('express');

module.exports = {
  getAll: function(req, res) {
    models.getAll(req.body, (err, data) => {
      console.log('req', req.body);
      if (err) {
        console.log('can not retrieve movie information');
      } else {
        res.send(data);
      }
    });
  }
};