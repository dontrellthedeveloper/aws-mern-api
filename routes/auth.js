const express = require('express');
const router = express.Router();

// import from controllers
const { register } = require('../controller/auth');

router.get('/register', register);

module.exports = router;