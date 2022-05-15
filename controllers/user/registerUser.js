const userManager = require('../../managers/UserManager');

async function registerUser(req,res){
    const response = await userManager.registerUser(req.body.data)
    res.status(200).json(response);
}

module.exports = registerUser;