const passport = require("passport");
const express = require('express');
const authController = require('./auth.controller');

const CALLBACK_OPTIONS = {failureRedirect: '/failure', successRedirect: '/', session: true}
const router = express.Router();

router.get('/google', passport.authenticate('google', {scope: ['email', 'profile']}));
router.get('/google/callback', passport.authenticate('google', CALLBACK_OPTIONS));
router.get('/logout', authController.logOut);

module.exports = router;
