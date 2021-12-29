// For calling all function in models
const { createAuthToken, verifyingToken } = require('../models/token-model');

exports.createToken = (req, res) => {
    // const data = {...req.body };
    // const queryInterest = 'SELECT * FROM tb_interests WHERE user_id = ?';
    // const queryUser = 'SELECT * FROM tb_users WHERE id_user = ?';
    // getInterests(res, queryUser, queryInterest, req.params.id, data);
    createAuthToken(res);

};
exports.verifyToken = (req, res) => {
    // const data = {...req.body };
    // const queryInterest = 'SELECT * FROM tb_interests WHERE user_id = ?';
    // const queryUser = 'SELECT * FROM tb_users WHERE id_user = ?';
    // getInterests(res, queryUser, queryInterest, req.params.id, data);
    verifyingToken(req, res);

};