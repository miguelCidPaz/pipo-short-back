const UserManager = require("../../managers/UserManager")


async function login(req, res){
    const response = await UserManager.login(req.body)
    res.status(200).json(response)
}

module.exports = login