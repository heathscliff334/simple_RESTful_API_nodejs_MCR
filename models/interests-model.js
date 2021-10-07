const conn = require('../config/database');
// For calling all function in response handler
const { responseData, responseMessage } = require('../utils/response-handler');

// ? Exports is used because we can use this function in another class or file
exports.insertInterests = (response, statementGet, statementInsert, data) => {
    let tempId;
    var tempData = data;

    conn.query(statementGet, (err, rows, field) => {
        if (err) {
            return response.status(200).json({ message: 'Failed to find the ID', error: err });
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
                    return response.status(500).json({ message: 'Failed to insert the data to tb_interests', error: err });
                }
                responseMessage(response, 201, 'Succes to insert the data to tb_interests');
            });
        }
    });
};
exports.getInterests = (response, statement, data) => {
    conn.query(statement, data, (err, rows, field) => {
        if (err) {
            return response.status(500).json({ message: 'Failed to get the data', error: err });
        }
        responseData(response, 200, rows);
    });
};
exports.updateInterests = (response, findIdStatement, updateStatement, id, data) => {
    conn.query(findIdStatement, req.params.id, (err, rows, field) => {
        if (err) {
            return response.status(500).json({ message: 'Error to find the data ID', error: err });
        }
        // If the ID is found
        if (rows.length) {
            console.log('ID Found!');
            // Run the update query
            conn.query(updateStatement, [data, id], (err, rows, field) => {
                if (err) {
                    return response.status(500).json({ message: 'Error to update the data', error: err });
                }
                responseMessage(response, 200, 'Success to update the data');
            });
        }
        // If the ID is not found
        else {
            console.log('ID Not Found!');
            return response.status(404).json({ message: 'ID is not found', error: err, success: false });
        }
    });
};
exports.deleteInterests = (response, findIdStatement, deleteStatement, id) => {
    conn.query(findIdStatement, id, (err, rows, field) => {
        if (err) {
            return response.status(500).json({ message: 'Error to find the data ID', error: err });
        }
        if (rows.length) {
            conn.query(deleteStatement, id, (err, rows, field) => {
                if (err) {
                    return response.status(500).json({ message: 'Failed to delete the data', error: err });
                }
                responseMessage(response, 200, 'Deleted successfuly');
            });
        } else {
            return response.status(404).json({ message: 'ID is not found', error: err, success: false });
        }
    });
};