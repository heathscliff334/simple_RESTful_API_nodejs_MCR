const conn = require('../config/database');
const {
    responseData,
    responseError
} = require('../utils/response-handler');

exports.getInterests = (response, statementUser, statementInterest, id, data) => {

    conn.query(statementUser, id, (err, rows, field) => {
        if (err) {
            return responseError(response, 500, 'Failed to find the ID', err);
        }

        // rows.concat("test");
        dataUser = rows;
        // dataUser[0].interests = "test";
        // console.log(dataUser);
        // responseData(response, 200, dataUser);
        if (rows.length) {

            conn.query(statementInterest, id, (err, rows, field) => {
                if (err) {
                    return responseError(response, 500, 'Failed to get the data', err);
                }
                // var dataTemp = { 'users': dataUser, 'interests': rows };
                // dataUser.interests = "test"
                dataUser[0].interests = rows
                    // console.log(dataUser);
                    // tempString = rows[0].interest_name + rows[1].interest_name + rows[3].interest_name
                let tempInterest = "";
                for (var i = 0; i < rows.length; i++) {
                    if (rows[i + 1] != null) {
                        tempInterest = tempInterest + rows[i].interest_name + ", ";
                    } else {
                        tempInterest = tempInterest + rows[i].interest_name;
                    }
                }
                console.log(tempInterest);
                responseData(response, 200, dataUser);
            });
        } else {
            console.log('ID Not Found!');
            return responseError(response, 404, 'ID not found', err);
        }

    });

};