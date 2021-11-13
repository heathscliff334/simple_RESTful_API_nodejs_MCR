const { response } = require('express');
const conn = require('../config/database');
const {
    responseData,
    responseMessage,
    responseError
} = require('../utils/response-handler');

exports.getSkills = (response, statement, statementLang, data) => {
    conn.query(statement, data, (err, rows, field) => {
        if (err) {
            return responseError(response, 500, 'Failed to get the skills', err);
        } 
        else {
            skillsData = rows;
            conn.query(statementLang, data, (err, rows, field) => {
                if (err) {
                    return responseError(response, 500, 'Failed to get the languages', err);
                }
                var data = {"skills": skillsData,"languages": rows}
                responseData(response, 200, data);
            });            
        }

        // responseData(response, 200, rows);
    });
};
exports.insertSkills = (response, getState, insertState, data) => {
    let tempId;
    conn.query(getState, (err, rows, field) => {
        if (err) {
            return responseError(response, 500, 'Failed to get the ID', err);
        } else {
            tempId = rows[0]['last_id'];
            if (tempId == null) {
                tempId = 1;
            } else {
                tempId = (tempId + 1);
            }
            data.id_skill = tempId;
            conn.query(insertState, data, (err, rows, field) => {
                if (err) {
                    return responseError(response, 500, 'Failed to insert the data', err);
                }
                responseMessage(response, 200, 'Success to insert the data');
            });
        }

    });
};
exports.updateSkills = (response, findIdStatement, updateStatement, id, data) => {
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
};
exports.deleteSkills = (response, findIdStatement, deleteStatement, id) => {
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
};