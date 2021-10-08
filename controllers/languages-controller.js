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
};
exports.getData = (req, res) => {
    const data = {...req.body };
    const query = 'SELECT * FROM tb_languages';
    getLanguages(res, query, data);
};
exports.updateData = (req, res) => {
    const data = {...req.body };
    const findIdQuery = 'SELECT * FROM tb_languages WHERE id_language = ?';
    const updateQuery = 'UPDATE tb_languages SET ? WHERE id_language = ?';
    console.log('ID from parameter (controller) : ' + req.params.id);
    updateLanguages(res, findIdQuery, updateQuery, req.params.id, data);
};
exports.deleteData = (req, res) => {
    const findIdQuery = 'SELECT * FROM tb_languages WHERE id_language = ?';
    const deleteQuery = 'DELETE FROM tb_languages WHERE id_language = ?';
    deleteLanguages(res, findIdQuery, deleteQuery, req.params.id);
};