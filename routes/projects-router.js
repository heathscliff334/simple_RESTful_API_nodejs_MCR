const {
    getData,
    createData,
    updateData,
    deleteData
} = require('../controllers/projects-controller');
const express = require('express');
const router = express.Router();

router.route('/')
    .post(createData)
    .get(getData);

router.route('/:id')
    .put(updateData)
    .delete(deleteData);

module.exports = router;