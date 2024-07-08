
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');


router.post('/register', authController.registerCustomer);
router.post('/login', authController.authenticateCustomer);


module.exports = router;