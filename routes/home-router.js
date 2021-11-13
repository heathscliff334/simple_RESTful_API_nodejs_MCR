const {
    getData
} = require('../controllers/home-controller');
const express = require('express');
const router = express.Router();

router.route('/:id')
    .get(getData);

module.exports = router;