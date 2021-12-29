const {
    getSkills,
    insertSkills,
    updateSkills,
    deleteSkills
} = require('../models/skills-model');

exports.getData = (req, res) => {
    const data = {...req.body };
    const query = 'SELECT * FROM tb_skills ORDER BY skill_name ASC';
    const queryLang = 'SELECT * FROM tb_languages ORDER BY language_name ASC';
    getSkills(res, query, queryLang, data);

};
exports.createData = (req, res) => {
    const data = {...req.body };
    const getId = 'SELECT MAX(id_skill) as last_id FROM tb_skills';
    const insertQuery = 'INSERT INTO tb_skills SET ?';
    insertSkills(req, res, getId, insertQuery, data);
};
exports.updateData = (req, res) => {
    const data = {...req.body };
    const findIdQuery = 'SELECT * FROM tb_skills WHERE id_skill = ?';
    const updateQuery = 'UPDATE tb_skills SET ? WHERE id_skill = ?';
    updateSkills(req, res, findIdQuery, updateQuery, req.params.id, data);
};
exports.deleteData = (req, res) => {
    const findIdQuery = 'SELECT * FROM tb_skills WHERE id_skill = ?';
    const deleteQuery = 'DELETE FROM tb_skills WHERE id_skill = ?';
    deleteSkills(req, res, findIdQuery, deleteQuery, req.params.id);
};