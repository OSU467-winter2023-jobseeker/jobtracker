const express = require('express');
const router = express.Router();
const skillsController = require('../controllers/skillsController');
const authorization = require('../middleware/authorization');

router.get('/', authorization.checkToken, skillsController.getSkills);
router.put('/', authorization.checkToken, skillsController.updateSkills);

module.exports = router;