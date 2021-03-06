var BebeService = require('../services/bebe.service');
_this = this;

exports.getBebes = async function (req, res, next) {

    // Check the existence of the query parameters, If doesn't exists assign a default value
    var page = req.query.page ? req.query.page : 1
    var limit = req.query.limit ? req.query.limit : 10;
    let filtro= {email: req.body.email}
    try {
        var Users = await BebeService.getBebes(filtro, page, limit)
        // Return the Users list with the appropriate HTTP password Code and Message.
        return res.status(200).json({status: 200, data: Users, message: "Succesfully Bebes Recieved"});
    } catch (e) {
        //Return an Error Response Message with Code and the Error Message.
        return res.status(400).json({status: 400, message: e.message});
    }
}

exports.getBebeByName= async function (req, res, next) {

    // Check the existence of the query parameters, If doesn't exists assign a default value
    var page = req.query.page ? req.query.page : 1
    var limit = req.query.limit ? req.query.limit : 10;
    let filtro= {email: req.body.email,name: req.body.name}
    try {
        var Users = await BebeService.getBebes(filtro, page, limit)
        // Return the Users list with the appropriate HTTP password Code and Message.
        return res.status(200).json({status: 200, data: Users, message: "Succesfully Bebes Recieved"});
    } catch (e) {
        //Return an Error Response Message with Code and the Error Message.
        return res.status(400).json({status: 400, message: e.message});
    }
}

exports.createBebe = async function (req, res, next) {
    // Req.Body contains the form submit values.
    console.log("llegue al controller",req.body)
    var User = {
        email: req.body.email,
        name: req.body.name,
        sexo: req.body.sexo,
        peso: req.body.peso,
        altura: req.body.altura,
        fecha: req.body.fecha,
        enfermedad:req.body.enfermedad.split(','),
        alergias:req.body.alergias.split(','),
        cabeza:req.body.cabeza,
        sangre:req.body.sangre
    }
        try {
            // Calling the Service function with the new object from the Request Body
            var createdBebe = await BebeService.createBebe(User)
            return res.status(201).json({createdBebe, message: "Succesfully Created Bebe"})
        } catch (e) {
            //Return an Error Response Message with Code and the Error Message.
            console.log(e)
            return res.status(400).json({status: 400, message: "Bebe Creation was Unsuccesfull"})
        }
}