require('dotenv').config();
const conn = require('../config/database');
// For calling all function in response handler
const {
    responseData,
    responseMessage,
    responseError
} = require('../utils/response-handler');
const jwt = require('jsonwebtoken');
const { auth } = require('../middleware/token-auth');

// ? Exports is used because we can use this function in another class or file
exports.insertInterests = (request, response, statementGet, statementInsert, data) => {
    const verif = auth(request, response);
    if (verif.verified) {
        let tempId;
        var tempData = data;

        conn.query(statementGet, (err, rows, field) => {
            if (err) {
                // return response.status(200).json({ message: 'Failed to find the ID', error: err });
                return responseError(response, 500, 'Failed to find the ID', err);
            } else {
                tempId = rows[0]['last_id'];
                if (tempId == null) {
                    tempId = 1;
                } else {
                    tempId = ++tempId;
                }
                console.log(tempId);

                data.id_interest = tempId;
                console.log(data);
                conn.query(statementInsert, data, (err, rows, field) => {
                    // Error handling
                    if (err) {
                        return responseError(response, 500, 'Failed to insert the data to tb_interests', err);
                    }
                    responseMessage(response, 201, 'Succes to insert the data to tb_interests');
                });
            }
        });

    } else {
        responseError(response, verif.responseStats, verif.message, "");
    }
};
exports.getInterests = (response, statement, data) => {
    conn.query(statement, data, (err, rows, field) => {
        if (err) {
            return responseError(response, 500, 'Failed to get the data', err);
        }
        responseData(response, 200, rows);
    });
};
exports.updateInterests = (request, response, findIdStatement, updateStatement, id, data) => {
    const verif = auth(request, response);
    if (verif.verified) {
        conn.query(findIdStatement, id, (err, rows, field) => {
            if (err) {
                // return response.status(500).json({ message: 'Error to find the data ID', error: err });
                return responseError(response, 500, 'Error to find the ID', err);
            }
            // If the ID is found
            if (rows.length) {
                console.log('ID Found!');
                // Run the update query
                conn.query(updateStatement, [data, id], (err, rows, field) => {
                    if (err) {
                        // return response.status(500).json({ message: 'Error to update the data', error: err });
                        return responseError(response, 500, 'Failed to update the data', err);
                    }
                    responseMessage(response, 200, 'Success to update the data');
                });
            }
            // If the ID is not found
            else {
                console.log('ID Not Found!');
                // return response.status(404).json({ message: 'ID is not found', error: err, success: false });
                return responseError(response, 404, 'ID not found', err);
            }
        });
    } else {
        responseError(response, verif.responseStats, verif.message, "");
    }
};
exports.deleteInterests = (request, response, findIdStatement, deleteStatement, id) => {
    const verif = auth(request, response);
    if (verif.verified) {
        conn.query(findIdStatement, id, (err, rows, field) => {
            if (err) {
                return response.status(500).json({ message: 'Error to find the data ID', error: err });
            }
            if (rows.length) {
                conn.query(deleteStatement, id, (err, rows, field) => {
                    if (err) {
                        // return response.status(500).json({ message: 'Failed to delete the data', error: err });
                        return responseError(response, 500, 'Failed to delete the data', err);
                    }
                    responseMessage(response, 200, 'Deleted successfuly');
                });
            } else {
                return response.status(404).json({ message: 'ID is not found', error: err, success: false });
            }
        });
    } else {
        responseError(response, verif.responseStats, verif.message, "");
    }
};