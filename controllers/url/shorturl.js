const UrlManager = require('../../managers/UrlManager')

async function shortUrl(req,res){
    const response = await UrlManager.shortUrl(req.body.data);
    console.log(response)
    res.status(200).json(response)
}

module.exports = shortUrl;