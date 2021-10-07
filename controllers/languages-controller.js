const {
    insertLanguages,
    getLanguages,
    updateLanguages,
    deleteLanguages
} = require('../models/languages-model');

exports.createData = (req, res) => {
    const queryGetId = 'SELECT MAX(id_language) as last_id FROM tb_languages';
    const data = {...req.body };
    const queryInsert = 'INSERT INTO tb_languages SET ?';
    insertLanguages(res, queryGetId, queryInsert, data);
}
exports.getData = (req, res) => {
    const data = {...req.body };
    const query = 'SELECT * FROM tb_languages';
    getLanguages(res, query, data);
}