const jwt = require("jsonwebtoken")

const config = process.env
const {
    responseData,
    responseMessage,
    responseError
} = require('../utils/response-handler');

exports.auth = (req, res) => {
    const token = req.body.token || req.query.token || req.headers["x-access-token"]

    if (!token) {

        var data = { "responseStats": 403, "verified": false, "message": 'A token is required for authentication' }
        return data;
    }
    try {
        const decoded = jwt.verify(token, config.TOKEN_KEY)
        req.user = decoded;

        var data = { "responseStats": 200, "verified": true, "message": 'Token is valid' }
        return data;

    } catch (err) {

        var data = { "responseStats": 401, "verified": false, "message": 'Invalid token' }
        return data;
    }
}