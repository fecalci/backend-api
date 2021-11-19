var mongoose = require('mongoose')
var mongoosePaginate = require('mongoose-paginate')


var ControlSchema = new mongoose.Schema({
    email: String,
    name: String,
    observacion: String,
    peso: String,
    altura: String,
    cabeza:String,
    medicamento:String,
    estudio:String,
    resultado:String,
    fecha_control: Date
})

ControlSchema.plugin(mongoosePaginate)
const Control = mongoose.model('Control', ControlSchema)

module.exports = Control;