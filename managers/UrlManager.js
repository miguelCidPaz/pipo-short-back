const url = require("../schemas/recordUrl")
const config = require("../config")

const shortUrl = async(data) => {
    const code = Math.random().toString(36).substr(2,5);
    const response = `${config.URL_FRONT+code}`
    
    
    return response
}

module.exports = {
    shortUrl:shortUrl,
}