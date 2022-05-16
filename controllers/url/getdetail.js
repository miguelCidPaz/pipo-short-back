const UrlManager = require('../../managers/UrlManager')

async function getDetail(req,res){
    const response = await UrlManager.getDetail(req.params.code)
    res.status(200).json(response)
}

module.exports = getDetail