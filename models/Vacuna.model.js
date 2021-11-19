var mongoose = require('mongoose')
var mongoosePaginate = require('mongoose-paginate')


var VacunaSchema = new mongoose.Schema({
    email: String,
    bebe: String,
    fecha: Date,
    centro_vac: String,
    vacuna: String,
    dosis: String,
    edad: String

})

BebeSchema.plugin(mongoosePaginate)
const Vacuna = mongoose.model('Vacuna', VacunaSchema)

module.exports = Vacuna;