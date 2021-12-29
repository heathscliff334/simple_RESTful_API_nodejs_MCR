require('dotenv').config();
const conn = require('../config/database');
const {
    responseData,
    responseMessage,
    responseError
} = require('../utils/response-handler');
const jwt = require('jsonwebtoken');
const { auth } = require('../middleware/token-auth');

exports.getProjects = (response, statement, data) => {
    conn.query(statement, data, (err, rows, field) => {
        if (err) {
            return responseError(response, 500, 'Failed to get the data', err);
        }
        responseData(response, 200, rows);
    });
};
exports.insertProjects = (request, response, getState, insertState, data) => {
    const verif = auth(request, response);
    if (verif.verified) {
        let tempId;
        conn.query(getState, (err, rows, field) => {
            if (err) {
                return responseError(response, 500, 'Failed to get the ID', err);
            } else {
                tempId = rows[0]['last_id'];
                if (tempId == null) {
                    tempId = 1;
                } else {
                    tempId = ++tempId;
                }
                data.id_project = tempId;
                conn.query(insertState, data, (err, rows, field) => {
                    if (err) {
                        return responseError(response, 500, 'Failed to insert the data', err);
                    }
                    responseMessage(response, 200, 'Success to insert the data');
                });
            }

        });
    } else {
        responseError(response, verif.responseStats, verif.message, "");
    }

};
exports.updateProjects = (request, response, findIdStatement, updateStatement, id, data) => {
    const verif = auth(request, response);
    if (verif.verified) {
        conn.query(findIdStatement, id, (err, rows, field) => {
            if (err) {
                return responseError(response, 500, 'Failed to find the ID', err);
            }

            if (rows.length) {
                console.log('ID Found!');
                console.log([data, id]);
                conn.query(updateStatement, [data, id], (err, rows, field) => {
                    if (err) {
                        return responseError(response, 500, 'Failed to update the data', err);
                    }
                    responseMessage(response, 200, 'Data updated successfuly');
                });


            } else {
                console.log('ID Not Found!');
                return responseError(response, 404, 'ID not found', err);
            }
        });
    } else {
        responseError(response, verif.responseStats, verif.message, "");
    }
};
exports.deleteProjects = (request, response, findIdStatement, deleteStatement, id) => {
    const verif = auth(request, response);
    if (verif.verified) {
        conn.query(findIdStatement, id, (err, rows, field) => {
            if (err) {
                return responseError(response, 500, 'Failed to find the ID', err);
            }
            if (rows.length) {
                conn.query(deleteStatement, id, (err, rows, field) => {
                    if (err) {
                        return responseError(response, 500, 'Failed to delete the data', err);
                    }
                    responseMessage(response, 200, 'Delete successfuly');
                });
            } else {
                return responseError(response, 404, 'ID not found', err);
            }
        });
    } else {
        responseError(response, verif.responseStats, verif.message, "");
    }
};