require('dotenv').config();

module.exports = {
    PORT: process.env.PORT,
    MONGO_USER: process.env.MONGO_USER,
    MONGO_PASS: process.env.MONGO_PASS,
    URL_FRONT: process.env.URL_FRONT
}
