var controller = require('./controller.js');
var router = require('express').Router();

// Connect controller methods to their corresponding routes
router.get('/movies', controller.getAll);

router.get('/movies/search?term=', controller.get);

module.exports = router;
