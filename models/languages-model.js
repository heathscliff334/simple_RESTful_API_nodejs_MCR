require('dotenv').config();
const conn = require('../config/database');
const {
    responseData,
    responseMessage,
    responseError
} = require('../utils/response-handler');
const jwt = require('jsonwebtoken');
const { auth } = require('../middleware/token-auth');
const e = require('express');

exports.insertLanguages = (request, response, statementGet, statementInsert, data) => {
    const verif = auth(request, response);
    if (verif.verified) {
        let tempId;

        conn.query(statementGet, (err, rows, field) => {
            if (err) {
                return responseError(response, 500, 'Failed to find the last ID', err);
            } else {
                tempId = rows[0]['last_id'];
                if (tempId == null) {
                    tempId = 1;
                } else {
                    tempId = ++tempId;
                }
                console.log(tempId);
                data.id_language = tempId;
                console.log(data);
                conn.query(statementInsert, data, (err, rows, field) => {
                    if (err) {
                        return responseError(response, 500, 'Failed to insert the data', err);
                    }
                    responseMessage(response, 201, 'Success to insert the data');
                });

            }
        });
    } else {
        responseError(response, verif.responseStats, verif.message, "");
    }
};
exports.getLanguages = (response, statement, data) => {
    conn.query(statement, data, (err, rows, field) => {
        if (err) {
            return responseError(response, 500, 'Failed to get the data', err);
        }
        responseData(response, 200, rows);
    });
};
exports.updateLanguages = (request, response, findIdStatement, updateStatement, id, data) => {
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
exports.deleteLanguages = (request, response, findIdStatement, deleteStatement, id) => {
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