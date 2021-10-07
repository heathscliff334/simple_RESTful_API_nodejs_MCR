const {
    createData,
    getData
} = require('../controllers/languages-controller');
const express = require('express');
const router = express.Router();

router.route('/')
    .post(createData)
    .get(getData);

module.exports = router;