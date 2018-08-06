const express = require('express');
const router = express.Router();
const simpleController = require("../controllers/simpleController");

router.get('/', new simpleController().index);

module.exports = router;
