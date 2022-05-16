const UrlManager = require("../../managers/UrlManager")

async function getAllUrls(req,res){
    const response = await UrlManager.getInfo({id: req.userId, username: req.username})
    res.status(200).json(response)
}

module.exports = getAllUrls