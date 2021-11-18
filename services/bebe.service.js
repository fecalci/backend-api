// Gettign the Newly created Mongoose Model we just created 
var Bebe = require('../models/Bebe.model');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

// Saving the context of this module inside the _the variable
_this = this

// Async function to get the User List
exports.getBebes = async function (query, page, limit) {

    // Options setup for the mongoose paginate
    var options = {
        page,
        limit
    }
    // Try Catch the awaited promise to handle the error 
    try {
        console.log("Query",query)
        var Users = await Bebe.paginate(query, options)
        // Return the Userd list that was retured by the mongoose promise
        return Users;

    } catch (e) {
        // return a Error message describing the reason 
        console.log("error services",e)
        throw Error('Error while Paginating Users');
    }
}

exports.createBebe = async function (user) {
    // Creating a new Mongoose Object by using the new keyword
    
    var newUser = new Bebe({
        email: user.email,
        name: user.name,
        sexo: user.sexo,
        peso: user.peso,
        altura: user.altura,
        fecha: user.fecha
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
        throw Error("Error while Creating Bebe")
    }
}
