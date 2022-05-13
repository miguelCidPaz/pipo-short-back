
const mongoose = require('mongoose');
const config = require("./../../config")

const user = config.MONGO_USER
const pass = config.MONGO_PASS
const uri = `mongodb+srv://${user}:${pass}@cluster0.ojlfn.mongodb.net/pipoShort?retryWrites=true&w=majority`
const db = mongoose.connection

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.catch(err => console.log(err))

db.once('open', _ => {
    console.log('MongoDB en marcha')
});

db.on('error', err => {
    console.log(err)
});

module.exports = db