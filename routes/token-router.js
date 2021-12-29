const {
    createToken,
    verifyToken
} = require('../controllers/token-controller');
const express = require('express');
const router = express.Router();

router.route('/create')
    .get(createToken);
router.route('/verify')
    .get(verifyToken);

module.exports = router;