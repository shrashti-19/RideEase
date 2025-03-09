const jwt = require('jsonwebtoken');
const userModel = require('../models/user.models');
const blacklistTokenModel = require('../models/blacklistToken.model');
const { captainModel } = require("../models/captain.model");

exports.authUser = async (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '') || req.cookies.token;
  if (!token) {
    return res.status(401).json({ error: 'Unauthorized access' });
  }

  // Check if the token is blacklisted
  const isBlacklisted = await blacklistTokenModel.findOne({ token });
  if (isBlacklisted) {
    return res.status(401).json({ error: 'Unauthorized access' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await userModel.findById(decoded._id);
    if (!user) {
      return res.status(401).json({ error: 'Unauthorized access' });
    }
    req.user = user;
    next();
  } catch (error) {
    res.status(401).json({ error: 'Unauthorized access' });
  }
};

module.exports.authCaptain = async (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '') || req.cookies.token;
  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  // Check if the token is blacklisted
  const isBlacklisted = await blacklistTokenModel.findOne({ token });
  if (isBlacklisted) {
    return res.status(401).json({ message: 'Unauthorized access' });
  }

  // Verify the token
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const captain = await captainModel.findById(decoded._id);
    if (!captain) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
    req.captain = captain;
    next();
  } catch (err) {
    res.status(401).json({ message: 'Unauthorized access' });
  }
};