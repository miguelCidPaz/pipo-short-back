const {Schema, model} = require('mongoose')

const recordUrlSchema = new Schema({
    code: String,
    url: String,
    idUser: String
})

module.exports = model('recordUrl', recordUrlSchema)