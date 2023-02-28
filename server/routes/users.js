const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');

router.get('/users', usersController.getUsers)
router.post('/user', usersController.insertUsers)
router.put('/user/:id', usersController.updateUsers)
router.delete('/:id', usersController.deleteUsers)

module.exports = router;