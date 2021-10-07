// For calling all function in models
const {
    insertInterests,
    getInterests,
    updateInterests,
    deleteInterests
} = require('../models/interests-model');

exports.createData = (req, res) => {
    // const id_temp = uniqid();
    // lastInterestId();
    const queryGetId = 'SELECT MAX(id_interest) as last_id FROM tb_interests';
    // const data = { id_interest: id_temp, ...req.body };
    const data = {...req.body };
    const queryInsert = 'INSERT INTO tb_interests SET ?';
    insertInterests(res, queryGetId, queryInsert, data);
};

exports.getData = (req, res) => {
    const data = {...req.body };
    const query = 'SELECT * FROM tb_interests';
    getInterests(res, query, data);
};
exports.updateData = (req, res) => {
    const data = {...req.body };
    const findIdQuery = 'SELECT * FROM tb_interests WHERE id_interest = ?';
    const updateQuery = 'UPDATE tb_interests SET ? WHERE id_interest = ?';
    updateInterests(res, findIdQuery, updateQuery, req.params.id, data);
};
exports.deleteData = (req, res) => {
    const findIdQuery = 'SELECT * FROM tb_interests WHERE id_interest = ?';
    const deleteQuery = 'DELETE FROM tb_interests WHERE id_interest = ?';
    deleteInterests(res, findIdQuery, deleteQuery, req.params.id);
};

function uniqid(prefix = "", random = false) {
    const sec = Date.now() * 1000 + Math.random() * 1000;
    const id = sec.toString(16).replace(/\./g, "").padEnd(10, "0");
    return `${prefix}${id}${random ? `.${Math.trunc(Math.random() * 100000000)}`:""}`;
};
function lastInterestId(){

    // const data = {...req.body};
    const query = 'SELECT id_interest FROM tb_interests';
    const tempId = getLastId(query);
    console.log('temp id : '+tempId);
    // return tempId;
}