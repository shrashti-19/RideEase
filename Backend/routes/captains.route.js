const express = require('express');
const route = express.Router();
const { body } = require("express-validator");
const captainController = require('../controllers/captain.controller');

route.post('/register', [
    body('email').isEmail().withMessage('Invalid email'),
    body('fullname.firstname').isLength({ min: 3 }).withMessage('First name should be 3 characters long'),
    body('password').isLength({ min: 6 }).withMessage('Password should be at least 6 characters long'),
    body('vehicle.color').isLength({ min: 3 }).withMessage('Color must be at least 3 characters long'),
    body('vehicle.plate').isLength({ min: 3 }).withMessage('Plate must be at least 3 characters long'),
    body('vehicle.capacity').isInt({ min: 1 }).withMessage('Capacity must be at least 1'),
    body('vehicle.vehicleTypes').isIn(['car', 'motorcycle', 'auto']).withMessage('Invalid vehicle type')
],
captainController.registerCaptain
);

module.exports = route;