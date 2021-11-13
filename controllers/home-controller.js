// For calling all function in models
const { getInterests } = require('../models/home-model');

exports.getData = (req, res) => {
    const data = {...req.body };
    const queryInterest = 'SELECT * FROM tb_interests WHERE user_id = ?';
    const queryUser = 'SELECT * FROM tb_users WHERE id_user = ?';
    getInterests(res, queryUser, queryInterest, req.params.id, data);
};