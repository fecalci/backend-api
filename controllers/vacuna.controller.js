var VacunaService = require('../services/vacuna.service');
_this = this;

exports.getVacuna = async function (req, res, next) {
    console.log("Entro")
    // Check the existence of the query parameters, If doesn't exists assign a default value
    var page = req.query.page ? req.query.page : 1
    var limit = req.query.limit ? req.query.limit : 10;
    let filtro= {email: req.body.email, bebe:req.body.bebe}
    try {
        console.log("Entro1")
        var Users = await VacunaService.getVacunas(filtro, page, limit)
        // Return the Users list with the appropriate HTTP password Code and Message.
        return res.status(200).json({status: 200, data: Users, message: "Succesfully Bebes Recieved"});
    } catch (e) {
        //Return an Error Response Message with Code and the Error Message.
        return res.status(400).json({status: 400, message: e.message});
    }
}

exports.getVacunaByNameAndEmail= async function (req, res, next) {

    // Check the existence of the query parameters, If doesn't exists assign a default value
    var page = req.query.page ? req.query.page : 1
    var limit = req.query.limit ? req.query.limit : 10;
    let filtro= {email: req.body.email,bebe: req.body.bebe}
    try {
        var Users = await VacunaService.getVacunas(filtro, page, limit)
        // Return the Users list with the appropriate HTTP password Code and Message.
        return res.status(200).json({status: 200, data: Users, message: "Succesfully Bebes Recieved"});
    } catch (e) {
        //Return an Error Response Message with Code and the Error Message.
        return res.status(400).json({status: 400, message: e.message});
    }
}

exports.createVacuna = async function (req, res, next) {
    // Req.Body contains the form submit values.
    console.log("llegue al controller vacuna",req.body)
    var Vacuna = {
        email: req.body.email,
        bebe:req.body.bebe,
        fecha:req.body.fecha,
        centro_vac:req.body.centro_vac,
        vacuna:req.body.vacuna,
        dosis:req.body.dosis,
        edad:req.body.edad
    }
        try {
            // Calling the Service function with the new object from the Request Body
            var createdVaccine = await VacunaService.createVacuna(Vacuna)
            return res.status(201).json({createdVaccine, message: "Succesfully Created Vacuna"})
        } catch (e) {
            //Return an Error Response Message with Code and the Error Message.
            console.log(e)
            return res.status(400).json({status: 400, message: "Bebe Creation was Unsuccesfull"})
        }
}