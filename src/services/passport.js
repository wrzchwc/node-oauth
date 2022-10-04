const passport = require('passport');
const {Strategy} = require('passport-google-oauth20');
require('dotenv').config();

const AUTH_OPTIONS = {
    callbackURL: '/auth/google/callback',
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET
};

function verifyCallback(accessToken, refreshToken, profile, done) {
    done(null, profile);
}

passport.use(new Strategy(AUTH_OPTIONS, verifyCallback));

// Save the session to the cookie
passport.serializeUser(({id}, done) => {
    done(null, id);
});

// Read the session from the cookie
passport.deserializeUser((id, done) => {
    // User.findById(id).then(user => {
    //   done(null, user);
    // });
    done(null, id);
});