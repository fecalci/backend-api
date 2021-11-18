var mongoose = require('mongoose')
var mongoosePaginate = require('mongoose-paginate')


var BebeSchema = new mongoose.Schema({
    email: String,
    name: String,
    sexo: String,
    peso: String,
    altura: String,
    fecha: Date
})

BebeSchema.plugin(mongoosePaginate)
const Bebe = mongoose.model('Bebe', BebeSchema)

module.exports = Bebe;