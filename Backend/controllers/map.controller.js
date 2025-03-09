const { validationResult } = require('express-validator');
const mapsService = require('../services/maps.service');

exports.getCoordinates = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const address = req.query.address;

    try {
        const coordinates = await mapsService.getAddressCoordinate(address);
        res.json(coordinates);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch coordinates' });
    }
};