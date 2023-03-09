const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');
const authorization = require('../middleware/authorization');

router.get('/', authorization.checkToken, usersController.getUsers)
router.post('/', authorization.checkToken, usersController.insertUsers)
router.put('/:id', authorization.checkToken, usersController.updateUsers)
router.delete('/:id', authorization.checkToken, usersController.deleteUsers)

module.exports = router;