const express = require('express');
const UserController = require('../controllers/user.controller');

const router = express.Router();

// Route for user sign up
router.post('/auth/signup', UserController.signUp);

// Route for user login
router.post('/auth/login', UserController.login);

// Route for user logout
router.post('/auth/logout', UserController.logout);
router.post('/getCouponCode', UserController.getCouponCode);

// Route for booking a show
router.post('/bookShow', UserController.bookShow);

module.exports = router;
