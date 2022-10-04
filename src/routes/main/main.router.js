const express = require('express');
const checkLoggedIn = require('../../middlewares/check-logged-in');
const mainController = require('./main.controller');

const router = express.Router();

router.get('/secret', checkLoggedIn, mainController.getSecret)
router.get('/failure', mainController.getFailure)
router.get('/', mainController.getIndex)

module.exports = router;