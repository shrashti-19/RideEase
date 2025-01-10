const userModel = require("../models/user.models");
const bcyrpt = require('bcrypt');
const jwt = require('jsonwebtoken');

//middleware creartion
module.exports.authUser = async(req,res,next)=>{
    //token - header and cookies
    const token = req.cookies.token || (req.headers.authorization && req.headers.authorization.split(' ')[1]);

    if(!token){
        return res.status(401)
        .json({message : 'Unauthorized'});
    }
    //token is found 
    //cookie parser should be in the app js
    try{
        const decoded = jwt.verify(token,process.env.JWT_SECRET);
        const user = await userModel.findById(decoded._id);

        req.user = user;

        return next();
    }catch(err){
        return res.status(400)
        .json({message : "Unauthorized access"})
    }
}