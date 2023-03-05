const express = require('express');
const router = express.Router();
const skillsController = require('../controllers/skillsController');

router.get('/', skillsController.getSkills);
router.post('/', skill.updateSkills);

module.exports = router;