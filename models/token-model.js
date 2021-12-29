require('dotenv').config();
const {
    responseData,
    responseError,
    responseMessage
} = require('../utils/response-handler');
const jwt = require('jsonwebtoken');
const { auth } = require('../middleware/token-auth');

exports.createAuthToken = (response) => {
    const token = jwt.sign({ username: "heathscliff", email: "heathscliff334@gmail.com" }, process.env.TOKEN_KEY);
    const decoded = jwt.verify(token, process.env.TOKEN_KEY)
    var data = { "token": token, "token_decoded": decoded };
    return responseData(response, 200, data);
    // return responseMessage(response, false, 404, 'success');
}
exports.verifyingToken = (request, response) => {
    const verif = auth(request, response);
    console.log(verif.message);
    if (verif.verified) {
        responseData(response, 200, verif);
    } else {
        responseError(response, verif.responseStats, verif.message, "");
    }
    // return responseMessage(response, false, 404, 'success');
}