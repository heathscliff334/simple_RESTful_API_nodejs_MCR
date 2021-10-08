const responseData = function(response, statusCode, values) {
    var data = {
        success: true,
        data: values
    };
    response.status(statusCode).json(data);
    response.end();
};

const responseMessage = function(response, statusCode, message) {
    var data = {
        success: true,
        message: message
    };
    response.status(statusCode).json(data);
    response.end();
};

const responseError = function(response, statusCode, message, error) {
    var data = {
        success: false,
        message: message,
        error: error
    };
    response.status(statusCode).json(data);
    response.end();
}

module.exports = { responseData, responseMessage, responseError };