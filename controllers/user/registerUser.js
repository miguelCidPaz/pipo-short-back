const userManager = require('../../managers/UserManager');

async function registerUser(req,res){
    res.status(200).json("HOLO");
}

module.exports = registerUser;