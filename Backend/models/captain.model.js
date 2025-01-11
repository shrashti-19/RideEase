const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const captainSchema = new mongoose.Schema({
    fullname:{
        firstname:{
            type:String,
            required:true,
            minlenght:[3,'firstname should be 3 characters long']
        },
        lastname:{
            type:String,
            minlenght:[3,'lastname should be 3 characters long']
            
        }
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email']

    },
    password:{
        type:String,
        required:true,
        select:false
    },
    socketId:{
        type:String
    },
    status:{
        //available for ride taking or not
        type:String,
        enum:['active','inactive'],
        default:'inactive',
    },
    vehicle:{
        color:{
            type:String,
            required:true,
            minlength:[3,'color must be atleast 3 characters long']
        },
        plate:{
            type:Number,
            required:true,
            min:[1,'capcity should be 1 '], //vehicle capacity is 1 only driver will be available to sit in the vehicle 
        },
        vehicleTypes:{
            type:String,
            required:true,
            enum:['car','motorcycle','auto']
        }
    },
    location:{
        latitude:{
            type:Number
        },
        longitude:{
            type:Number
        }//both are not required as driver may be inactive
    }
})

captainSchema.methods.generateAuthToken=function(){
  const token = jwt.sign({_id:this._id}, process.env.JWT_SECRET, {expiresIn: '24h'});
  return token;
}

captainSchema.methods.comparePassword = async function(password){
    return await bcrypt.compare(password,this.password);
}

captainModel.methods.hashPassword = async function(password){
    return await bcrypt.hash(password,10);
}
const captainModel = mongoose.model('captain',captainSchema);
module.exports.captainModel;