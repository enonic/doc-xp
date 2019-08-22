var thymeleaf = require('/lib/xp/thymeleaf');

var view404 = resolve('page-not-found.html');
var viewGeneric = resolve('error.html');

exports.handle404 = function (err) {
    var body = thymeleaf.render(view404, {});
    return {
        contentType: 'text/html',
        body: body
    }
};

exports.handleError = function (err) {
    var debugMode = err.request.params.debug === 'true';
    if (debugMode && err.request.mode === 'preview') {
        return;
    }

    var params = {
        errorCode: err.status
    };
    var body = thymeleaf.render(viewGeneric, params);

    return {
        contentType: 'text/html',
        body: body
    }
};
