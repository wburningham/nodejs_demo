var express = require('express');
var router = express.Router();

/*

REST API - CRUDS

CREATE  HTTP  POST    /
READ    HTTP  GET     /:id
UPDATE  HTTP  PUT     /:id
DELETE  HTTP  DELETE  /:id
SEARCH  HTTP  GET     /

*/

// Optionally validate params
// router.param('id', /^\d+$/);


// CREATE
router.post('/', function(req, res) {

  res.send('need to return JSON with an ID');

});

// READ
router.get('/:id', function(req, res) {

  res.send('need to return JSON with a single post');

});

// UPDATE
router.put('/:id', function(req, res) {

  res.send('need to return 204 once updated');

});

// DELETE
router.delete('/:id', function(req, res) {

  res.send('need to return 204 once deleted');

});

// SEARCH
router.get('/', function(req, res) {

  res.send('need to return JSON with a list of posts');

});


module.exports = router;
