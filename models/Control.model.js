var mongoose = require('mongoose')
var mongoosePaginate = require('mongoose-paginate')


var ControlSchema = new mongoose.Schema({
    email: String,
    name: String,
    sexo: String,
    peso: String,
    altura: String,
    alergias:Array,
    enfermedad:Array    ,
    fecha_control: Date
})

ControlSchema.plugin(mongoosePaginate)
const Control = mongoose.model('Control', ControlSchema)

module.exports = Control;