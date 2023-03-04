const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');

router.get('/', usersController.getUsers)
router.post('/', usersController.insertUsers)
router.put('/:id', usersController.updateUsers)
router.delete('/:id', usersController.deleteUsers)

module.exports = router;