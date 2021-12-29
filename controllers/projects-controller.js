const {
    getProjects,
    insertProjects,
    updateProjects,
    deleteProjects
} = require('../models/projects-model');

exports.getData = (req, res) => {
    const data = {...req.body };
    const query = 'SELECT * FROM tb_projects WHERE user_id = 1 ORDER BY id_project DESC';
    getProjects(res, query, data);

};
exports.createData = (req, res) => {
    const data = {...req.body };
    const getId = 'SELECT MAX(id_project) as last_id FROM tb_projects';
    const insertQuery = 'INSERT INTO tb_projects SET ?';
    insertProjects(req, res, getId, insertQuery, data);
};
exports.updateData = (req, res) => {
    const data = {...req.body };
    const findIdQuery = 'SELECT * FROM tb_projects WHERE id_project = ?';
    const updateQuery = 'UPDATE tb_projects SET ? WHERE id_project = ?';
    updateProjects(req, res, findIdQuery, updateQuery, req.params.id, data);
};
exports.deleteData = (req, res) => {
    const findIdQuery = 'SELECT * FROM tb_projects WHERE id_project = ?';
    const deleteQuery = 'DELETE FROM tb_projects WHERE id_project = ?';
    deleteProjects(req, res, findIdQuery, deleteQuery, req.params.id);
};