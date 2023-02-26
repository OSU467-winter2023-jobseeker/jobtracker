const express = require('express');
const router = express.Router();
const contactsController = require('../controllers/contactsController');

router.get('/', contactsController.getContacts);
router.post('/', contactsController.createContacts);
router.put('/:id', contactsController.updateContacts);
router.delete('/:id', contactsController.deleteContacts);

module.exports = router;