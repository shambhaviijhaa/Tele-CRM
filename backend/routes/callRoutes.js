const express = require('express');
const { getCalls, createCall } = require('../controllers/callController');
const router = express.Router();

router.get('/', getCalls);
router.post('/', createCall);

module.exports = router;
