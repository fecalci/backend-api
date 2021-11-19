// Gettign the Newly created Mongoose Model we just created 
var Bebe = require('../models/Bebe.model');
var Control = require('../models/Control.model');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

// Saving the context of this module inside the _the variable
_this = this

// Async function to get the User List
exports.getControl = async function (query, page, limit) {

    // Options setup for the mongoose paginate
    var options = {
        page,
        limit
    }
    // Try Catch the awaited promise to handle the error 
    try {
        console.log("Query",query)
        var Users = await Control.paginate(query, options)
        // Return the Userd list that was retured by the mongoose promise
        return Users;

    } catch (e) {
        // return a Error message describing the reason 
        console.log("error services",e)
        throw Error('Error while Paginating Control');
    }
}


exports.getLastControl = async function (user) {

    var id = {email:user.email,name:user.name }

    try {
        //Find the old User Object by the Id
        var lastControl = await Control.findOne(id).sort({ 'fecha_control' : -1});
    } catch (e) {
        throw Error("Error occured while Finding the Control")
    }
    // If no old User Object exists return false
    if (!lastControl) {
        return false;
    }
    return lastControl
}

exports.createControl = async function (user) {
    // Creating a new Mongoose Object by using the new keyword
    
    var newUser = new Control({
        email: user.email,
        name: user.name,
        sexo: user.sexo,
        peso: user.peso,
        altura: user.altura,
        alergias:user.alergias,
        enfermedad:user.enfermedad,
        fecha_control: user.fecha_control,

    })
    //falta Ver como guardarlo
    try {
        // Saving the User 
        var savedUser = await newUser.save();
        var token = jwt.sign({
            id: savedUser._id
        }, process.env.SECRET, {
            expiresIn: 86400 // expires in 24 hours
        });
        return token;
    } catch (e) {
        // return a Error message describing the reason 
        console.log(e)    
        throw Error("Error while Creating Control")
    }
}
