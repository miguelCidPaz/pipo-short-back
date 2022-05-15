const UserManager = require("../../managers/UserManager")


async function login(req, res){
    console.log(req.userId)
    res.status(200).json('Accediendo a ruta privada')
}

module.exports = login