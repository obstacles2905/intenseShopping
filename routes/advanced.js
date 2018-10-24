"use strict";

const express = require('express');
const router = express.Router();
const Advanced = require("../controllers/Advanced");

router.get('/', (request, response) => {
  return new Advanced().renderPage(request, response);
});

module.exports = router;
