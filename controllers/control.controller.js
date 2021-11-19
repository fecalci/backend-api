var ControlService = require('../services/control.service');
var BebeService=require('../services/bebe.service')
_this = this;

exports.getControl = async function (req, res, next) {

    // Check the existence of the query parameters, If doesn't exists assign a default value
    var page = req.query.page ? req.query.page : 1
    var limit = req.query.limit ? req.query.limit : 10;
    let filtro= {email: req.body.email,name: req.body.name}
    try {
        var Users = await ControlService.getControl(filtro, page, limit)
        // Return the Users list with the appropriate HTTP password Code and Message.
        return res.status(200).json({status: 200, data: Users, message: "Succesfully Control Recieved"});
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
exports.getLastControl= async function (req, res, next) {

    // Check the existence of the query parameters, If doesn't exists assign a default value
    var page = req.query.page ? req.query.page : 1
    var limit = req.query.limit ? req.query.limit : 10;
    let filtro= {email: req.body.email,name: req.body.name}
    try {
        var Users = await ControlService.getLastControl(filtro, page, limit)
        // Return the Users list with the appropriate HTTP password Code and Message.
        return res.status(200).json({status: 200, data: Users, message: "Succesfully Bebes Recieved"});
    } catch (e) {
        //Return an Error Response Message with Code and the Error Message.
        return res.status(400).json({status: 400, message: e.message});
    }
}

exports.createControl = async function (req, res, next) {
    // Req.Body contains the form submit values.
    console.log("llegue al controller",req.body)
    var User = {
        email: req.body.email,
        name: req.body.name,
        sexo: req.body.sexo,
        peso: req.body.peso,
        altura: req.body.altura,
        fecha_control: req.body.fecha_control,
        alergias:req.body.alergias,
        enfermedad:req.body.enfermedad
    }
        try {
            // Calling the Service function with the new object from the Request Body
            var createdUser = await ControlService.createControl(User)
            var lastUser=await ControlService.getLastControl(User)
            var parts=User.fecha_control.split('-');
            var mydate = new Date(parts[0], parts[1] - 1, parts[2]);
            if (lastUser.fecha_control<mydate)
                var UpdateUser= await BebeService.updateBebe(User)
            return res.status(201).json({createdUser, message: "Succesfully Created Control"})
        } catch (e) {
            //Return an Error Response Message with Code and the Error Message.
            console.log(e)
            return res.status(400).json({status: 400, message: "Control Creation was Unsuccesfull"})
        }
}