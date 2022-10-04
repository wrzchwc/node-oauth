const passport = require("passport");
const passportSetup = require('./services/passport');
const express = require("express");
const helmet = require("helmet");
const cookieSession = require("cookie-session");
const authRouter = require('./routes/auth/auth.router');
const mainRouter = require('./routes/main/main.router');
require('dotenv').config();

const keys = [process.env.COOKIE_KEY_1, process.env.COOKIE_KEY_2];
const app = express();

app.use(helmet());
app.use(cookieSession({name: 'session', maxAge: 86400000, keys}));
app.use(passport.initialize());
app.use(passport.session());

app.use('/auth', authRouter)
app.use(mainRouter);

module.exports = app;