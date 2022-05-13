const {Schema, model} = require('mongoose')

const recordUrlSchema = new Schema({
    code: String,
    url: String,
    user: String
})

module.exports = model('recordUrl', recordUrlSchema)