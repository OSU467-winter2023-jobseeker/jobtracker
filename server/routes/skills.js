const express = require('express');
const router = express.Router();
const skillsController = require('../controllers/skillsController');

router.get('/:id', skillsController.getSkill);
// router.post('/', contactsController.createContacts);
// router.put('/:id', contactsController.updateContacts);
// router.delete('/:id', contactsController.deleteContacts);

module.exports = router;