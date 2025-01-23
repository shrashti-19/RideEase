const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const captainSchema = new mongoose.Schema({
    fullname: {
        firstname: {
            type: String,
            required: true,
            minlength: [3, 'firstname should be 3 characters long']
        },
        lastname: {
            type: String,
            minlength: [3, 'lastname should be 3 characters long']
        }
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email']
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    socketId: {
        type: String
    },
    status: {
        type: String,
        enum: ['active', 'inactive'],
        default: 'inactive',
    },
    vehicle: {
        color: {
            type: String,
            required: true,
            minlength: [3, 'color must be at least 3 characters long']
        },
        plate: {
            type: String,
            required: true,
            min: [1, 'capacity should be 1']
        },
        vehicleTypes: {
            type: String,
            required: true,
            enum: ['car', 'motorcycle', 'auto']
        }
    },
    location: {
        latitude: {
            type: Number
        },
        longitude: {
            type: Number
        }
    }
   
    
});

captainSchema.methods.generateAuthToken = function() {
    const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET, { expiresIn: '24h' });
    return token;
};

captainSchema.methods.comparePassword = async function(password) {
    return await bcrypt.compare(password, this.password);
};

const captainModel = mongoose.model('captain', captainSchema);

async function hashPassword(password) {
    return await bcrypt.hash(password, 10);
}

module.exports = {
    captainModel,
    hashPassword
};