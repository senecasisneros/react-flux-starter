'use strict';

const express = require('express');
const router = express.Router();

router.use('/names', require('./names'));

module.exports = router;
