const { captainModel, hashPassword } = require('../models/captain.model');
const { validationResult } = require('express-validator');
const captainService = require('../services/captain.service');
const blacklistTokenModel = require('../models/blacklistToken.model');

module.exports.registerCaptain = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { email, fullname, password, vehicle } = req.body;

    const isCaptainAlreadyExist = await captainModel.findOne({ email });
    if (isCaptainAlreadyExist) {
        return res.status(400).json({ message: 'Captain already exists' });
    }

    const hashedPassword = await hashPassword(password);

    const captain = await captainService.createCaptain({
        firstname: fullname.firstname,
        lastname: fullname.lastname,
        email,
        password: hashedPassword,
        color: vehicle.color,
        plate: vehicle.plate,
        capacity: vehicle.capacity,
        vehicleTypes: vehicle.vehicleTypes
    });
    const token = captain.generateAuthToken();
    console.log(req.body);
    

    res.status(201).json({ message: 'Captain registered successfully', captain,token });
};


//login control for the captain

module.exports.loginCaptain = async(req,res,next)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400)
        .json({errors:errors.array()})
    }

    const {email,password} = req.body;

    const captain  =await captainModel.findOne({email}).select('+password');

    if(!captain){
        return res.status(400)
        .json({message : 'Invalid email or password'});
    }

    //captain found
    const isMatch= await captain.comparePassword(password);
    if(!isMatch){
        return res.status(400)
        .json({message : 'invalid email or password'});
    }

    //token generate

    const token = captain.generateAuthToken();
    res.cookie('token',token);

    res.status(200)
    .json({token,captain})


}

//captain profile

module.exports.getCaptainProfile = async(req,res,next)=>{
    res.status(200)
    .json({captain:req.captain})
}

//logout
module.exports.logoutCaptain = async(req,res,next)=>{
    const token =  req.header('Authorization')?.replace('Bearer ', '') || req.cookies.token;
    await blacklistTokenModel.create({token});
    res.clearCookie('token')
    res.status(200)
    .json({message:'Logout successfully'})
}