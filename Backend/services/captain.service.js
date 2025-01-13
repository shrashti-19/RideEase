const {captainModel} = require('../models/captain.model')



module.exports.createCaptain = async({
    firstname,lastname,email,password,
    color,plate,capacity,vehicleTypes
})=>{
    if(!firstname||!email||!password||!color||!plate||!capacity||!vehicleTypes){
        throw new Error('All fields are required');
    }

    //all fields are available
    const captain = captainModel.create({
        fullname:{
            firstname,
            lastname
        },
        email,
        password,
        vehicle:{
            color,
            plate,
            capacity,
            vehicleTypes
        }
    })
    return captain;
}