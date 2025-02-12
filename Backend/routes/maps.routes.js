const express = require('express')
const router = express.Router();
const authMiddleware = require('../middlewares/auth.middlewares');
const mapControllers = require("../controllers/map.controller");
const {query} = require('express-validator')

router.get('/get-coordinates',
    query('address').isString().isLength({min:3}),
    authMiddleware.authUser,
    mapControllers.getCoordinates)

module.exports = router;