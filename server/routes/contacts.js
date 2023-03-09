const express = require('express');
const router = express.Router();
const contactsController = require('../controllers/contactsController');
const authorization = require('../middleware/authorization');

router.get('/:id', authorization.checkToken, contactsController.getContacts);
router.post('/', authorization.checkToken, contactsController.createContacts);
router.put('/:id', authorization.checkToken, contactsController.updateContacts);
router.delete('/:id', authorization.checkToken, contactsController.deleteContacts);

module.exports = router;