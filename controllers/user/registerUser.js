const userManager = require('../../managers/UserManager');

async function registerUser(req,res){
    const response = await userManager.registerUser(req.body.data)
    res.status(!response ? 418 : 200).json(response ? response : 'tea');
}

module.exports = registerUser;