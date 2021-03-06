const {request} = require('express');
const express = require('express');
const router = express.Router();
const skillsCtrl = require('../controllers/skills');

router.get('/', skillsCtrl.index);

router.get('/:id', skillsCtrl.show);

module.exports = router;