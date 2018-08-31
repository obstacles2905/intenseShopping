const express = require('express');
const router = express.Router();
const Advanced = require("../controllers/Advanced");

router.get('/', () => {
  return new Advanced().index();
});

module.exports = router;
