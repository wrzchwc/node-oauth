function logOut(request, response) {
    request.logout();
    return response.redirect('/');
}

module.exports = {logOut};