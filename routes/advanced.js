const express = require('express');
const router = express.Router();
const advancedController = require("../controllers/advancedController");

router.get('/', new advancedController().index);

module.exports = router;
