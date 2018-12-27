var portal = require('/lib/xp/portal');

// Handle GET request
exports.get = handleGet;

function handleGet() {
    var result = portal.getContent();
    var url = result.data.url;

    var response = {};

    if (url) {
        response.redirect = url;
    }
    else {
        response.body = 'No URL configured.'
    }

    return response;
}