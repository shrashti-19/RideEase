const userModel = require('../models/user.models');
const userService = require("../services/user.service");
const {validationResult} = require('express-validator');

module.exports.registerUser = async(req , res , next)=>{
    //logic - mongodb chahhiye
    console.log(req.body);
    

    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400)
        .json({errors : errors.array()});
    }

    const {fullname, email , password} = req.body;

    const hashedPassword = await userModel.hashPassword(password);

    const user = await userService.createUser({
        firstname : fullname.firstname,
        lastname : fullname.lastname,
        email,
        password:hashedPassword,
    });

    const token = user.generateAuthToken();
    res.status(201).json({token,user});

    
}

//login 

module.exports.loginUser = async(req,res,next)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400)
        .json({errors : errors.array()});
    }
    const {email,password} = req.body;

    const user  = await userModel.findOne({email}).select('+password');//+ isliye model mein select none kiya tha
    if(!user){
        return res.status(401)
        .json({message : 'Invalid email or password'})
    }

    //user found
    const isMatch = await user.comparePassword(password);
    if(!isMatch){
        return res.status(401)
        .json({message : 'Invalid email or password'
        });
    }
    //password is matched
    const token = user.generateAuthToken();

    res.status(200)
    .json({token,user});
}