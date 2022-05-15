const User = require('../schemas/User')
const { validation } = require('./../services/Validates')
const config = require('../config')
const jwt = require('jsonwebtoken')

const registerUser = async(data) => {
    if(!validation(data.user) || !validation(data.pass)) return 'datos invalidos'
    try{
        const usersInDatabase = await User.find()
        if(usersInDatabase.includes(data.user)) return 'nombre ya existente'

        const newUser = new User({username:data.user, password:data.pass})
        await newUser.save()

        const userForToken = {
            id: newUser._id,
            username: newUser.username
        }

        const token = jwt.sign(userForToken, config.CLAVE_JWT)

        return {username: newUser.username, token: token}
    }catch(e){
        console.log(e)
        return 'error'
    }
}

module.exports = {
    registerUser: registerUser,
}