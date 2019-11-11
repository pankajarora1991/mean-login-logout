const userLookup = require('../service/auth_service');

function authenticate(username, password, callback) {
    userLookup(username, password, callback);
}

module.exports = {
    authenticate,
};