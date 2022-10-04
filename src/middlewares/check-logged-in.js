function checkLoggedIn(request, response, next) {
    if (!(request.isAuthenticated() && request.user)) {
        return response.status(401).json({error: 'User non-authenticated!'});
    }
    next();
}

module.exports = checkLoggedIn;