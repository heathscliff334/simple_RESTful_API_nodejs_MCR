const conn = require('../config/database');

const { responseData, responseMessage } = require('../utils/response-handler');

exports.insertLanguages = (response, statementGet, statementInsert, data) => {
    let tempId;

    conn.query(statementGet, (err, rows, field) => {
        if (err) {
            return response.status(200).json({ message: "Failed to find the last ID", error: err });
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
                    return response.status(500).json({ message: "Failed to insert the data", error: err });
                }
                responseMessage(response, 201, 'Success to insert the data');
            });

        }
    });
};
exports.getLanguages = (response, statement, data) => {
    conn.query(statement, data, (err, rows, field) => {
        if (err) {
            return response.status(500).json({ message: 'Failed to get the data', error: err });
        }
        responseData(response, 200, rows);
    });
};
exports.updateLanguages = (response, findIdStatement, updateStatement, id, data) => {
    conn.query(findIdStatement, id, (err, rows, field) => {
        if (err) {
            return response.status(500).json({ message: 'Error to find the data ID', error: err });
        }

        if (rows.length) {
            console.log('ID Found!');
            console.log([data, id]);
            conn.query(updateStatement, [data, id], (err, rows, field) => {
                if (err) {
                    return response.status(500).json({ message: 'Failed to update the data', error: err });
                }
                responseMessage(response, 200, 'Data updated successfuly');
            });


        } else {
            console.log('ID Not Found!');
            return response.status(404).json({ message: 'ID is not found', error: err, success: false });
        }
    });
};
exports.deleteLanguages = (response, findIdStatement, deleteStatement, id) => {
    conn.query(findIdStatement, id, (err, rows, field) => {
        if (err) {
            return response.status(500).json({ message: 'Failed to find the id', error: err });
        }
        if (rows.length) {
            conn.query(deleteStatement, id, (err, rows, field) => {
                if (err) {
                    return response.status(500).json({ message: 'Failed to delete the data', error: err });
                }
                responseMessage(response, 200, 'Delete successfuly');
            });
        } else {
            return response.status(404).json({ message: 'ID is not found' });
        }
    });
};