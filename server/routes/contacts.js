const express = require('express');
const router = express.Router();
const contactsController = require('../controllers/contactsController');

app.get("/", contactsController.getContacts);
app.post("/", contactsController.createContacts);
app.put("/:id", contactsController.updateContacts);
app.delete("/:id", contactsController.deleteContacts);

module.exports = router;