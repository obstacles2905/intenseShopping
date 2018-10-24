"use strict";

const express = require("express");
const router = express.Router();
const Controller = require("../controllers/Category");

router.get("/", (request, response) => {
  return new Controller().renderPage(request, response);
})

module.exports = router;