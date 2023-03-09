const express = require('express');
const router = express.Router();
const applicationsController = require('../controllers/applicationsController');
const authorization = require('../middleware/authorization');

router.get('/:id', authorization.checkToken, applicationsController.getApplications);
router.post('/', authorization.checkToken, applicationsController.createApplications);
router.put('/:id', authorization.checkToken, applicationsController.updateApplications);
router.delete('/:id', authorization.checkToken, applicationsController.deleteApplications);

module.exports = router;