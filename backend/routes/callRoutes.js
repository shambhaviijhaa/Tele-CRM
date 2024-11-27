const express = require('express');
const router = express.Router();
const callController = require('../controllers/callController');

router.get('/', callController.getCalls);
router.post('/', callController.createCall);

module.exports = router;
