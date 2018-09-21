const express = require('express');
const router = express.Router();
const Result = require("../controllers/ResultController");

router.post('/', (request, response) => {
  return new Result().getResult(request, response);
});

module.exports = router;
