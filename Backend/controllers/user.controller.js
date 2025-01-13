const userModel = require('../models/user.models');
const userService = require("../services/user.service");
const {validationResult} = require('express-validator');
const blacklistTokenModel = require("../models/blacklistToken.model");

module.exports.registerUser = async(req , res , next)=>{
    //logic - mongodb chahhiye
    console.log(req.body);
    

    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400)
        .json({errors : errors.array()});
    }

    const {fullname, email , password} = req.body;

    const isUserAlreadyExist = await userModel.findOne({email});
    if(isUserAlreadyExist){
        return res.status(400)
        .json({message:'user already exists with some another mail'})
    }
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

    res.cookie('token',token);
    res.status(200)
    .json({token,user});
}

//profile of the user

module.exports.getUserProfile = async(req,res,next) =>{
//profile page user can see only 
   // we have to put a middleware there for finding which user is logged at that time
   //if no user is logged in at that time unauthorized access error message
   res.status(200)
   .json(req.user)//middleware mein set kiya hoga phir use krna hai 
}


//logout
module.exports.logoutUser = async(req,res,next)=>{
    res.clearCookie('token');
    const token = req.cookies.token || (req.headers.authorization && req.headers.authorization.split(' ')[1]);
    res.status(200)
    .json({message:'Logged Out'})
    //abhi bhi user ke pass localstorage pe token ho skta hai agar usnse share kr liya hot oh
    
}


