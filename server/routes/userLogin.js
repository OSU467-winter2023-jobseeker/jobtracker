const express = require('express');
const router = express.Router();
const userLoginController = require('../controllers/userLogin');

router.post('/', userLoginController.postUserLogin);

module.exports = router;