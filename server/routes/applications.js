const express = require('express');
const router = express.Router();
const applicationsController = require('../controllers/applicationsController');

router.get('/:id', applicationsController.getApplications);
router.post('/', applicationsController.createApplications);
router.put('/:id', applicationsController.updateApplications);
router.delete('/:id', applicationsController.deleteApplications);

module.exports = router;