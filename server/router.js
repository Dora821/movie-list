var controller = require('./controller.js');
var router = require('express').Router();

// Connect controller methods to their corresponding routes


router.get('/movies/search', controller.getOne);
router.get('/movies', controller.getAll);
router.post('/movies', controller.postOne);


module.exports = router;
