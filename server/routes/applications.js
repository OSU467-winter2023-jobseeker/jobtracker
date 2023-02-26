const express = require('express');
const router = express.Router();
const applicationsController = require('../controllers/loginController');

router.get('/', applicationsController.getApplications)
router.post('/', applicationsController.createApplications)
router.put('/:id', applicationsController.updateApplications)
router.delete('/:id', applicationsController.deleteApplicationss)

module.exports = router;