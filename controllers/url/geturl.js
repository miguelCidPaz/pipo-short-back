const UrlManager = require('../../managers/UrlManager')

const getUrl = async(req,res) => {
    const response = await UrlManager.getUrl(req.body.data);
    res.status(200).json(response)
}

module.exports = getUrl