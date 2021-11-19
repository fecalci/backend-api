// Gettign the Newly created Mongoose Model we just created 
var Vacuna = require('../models/Vacuna.model');
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
    
    var newVacuna = new Vacuna({
        email: vacuna.email,
        bebe:vacuna.bebe,
        fecha:vacuna.fecha,
        centro_vac:vacuna.centro_vac,
        vacuna:vacuna.vacuna,
        dosis:vacuna.dosis,
        edad:vacuna.edad
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

exports.updateBebe = async function (user) {
    
    var id = {email:user.email,name:user.name}

    try {
        //Find the old User Object by the Id
        var oldUser = await Bebe.findOne(id);
    } catch (e) {
        throw Error("Error occured while Finding the User")
    }
    // If no old User Object exists return false
    if (!oldUser) {
        return false;
    }
    //Edit the User Object
    oldUser.peso = user.peso
    oldUser.altura = user.altura

    //agrega enfermedad nueva
    user.enfermedad.map((enfer) => {
        oldUser.enfermedad.push(enfer)
    })

    //agrega alergia nueva
    user.alergias.map((alergia) => {
        oldUser.alergias.push(alergia)
    })

    try {
        var savedUser = await oldUser.save()
        return savedUser;
    } catch (e) {
        throw Error("And Error occured while updating the User");
    }
}