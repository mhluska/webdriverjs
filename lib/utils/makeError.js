module.exports = makeError;

function makeError(obj, data) {
    if (!obj) {
        return null
    }

    var context;
    try {
        context = JSON.stringify(data);
    } catch (e) {
        context = null;
    }


    if (context) {
        obj.message = obj.message + ' - CONTEXT: ' + JSON.stringify(context);
    }

    var error = new Error();

    Object.keys(obj).forEach(function assign(propName) {
        error[propName] = obj[propName];
    });

    return error;
}