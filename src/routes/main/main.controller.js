const path = require("path");

function getSecret(request, response) {
    return response.send('Your personal secret is 42!')
}

function getFailure(request, response) {
    return response.send('Failed to login!');
}

function getIndex(request, response) {
    response.sendFile(path.join(__dirname, '..', '..', '..', 'public', 'index.html'));
}

module.exports = {getSecret, getFailure, getIndex};