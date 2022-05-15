const userManager = require('../../managers/UserManager');

async function registerUser(req,res){
    const response = await userManager.registerUser(req.body.data)
    console.log(response)
    res.status(200).json(response);
}

module.exports = registerUser;