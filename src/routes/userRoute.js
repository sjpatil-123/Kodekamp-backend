const express = require('express');
const { submitForm } = require('../controller/userController');
const router = express.Router();

router.post('/submit', submitForm);

module.exports = router;