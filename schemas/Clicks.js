const {Schema, model} = require('mongoose')

const clicksSchema = new Schema({
    code: String,
    language: String,
    date: Date,
    platform: String,
    lasturl: String
})

module.exports = model('Clicks', clicksSchema)