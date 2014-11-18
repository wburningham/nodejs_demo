var postsStore = require('../postsStore');
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

/* GET posts listing. */
router.get('/', function(req, res) {
  res.json(postsStore.get());
});


module.exports = router;
