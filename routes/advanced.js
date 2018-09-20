const express = require('express');
const router = express.Router();
const Advanced = require("../controllers/Advanced");

router.get('/', (request, response) => {
  return new Advanced().index(request, response);
});

module.exports = router;
