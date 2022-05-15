const User = require('../schemas/User')
const { validation } = require('./../services/Validates')

const registerUser = async(data) => {
    if(!validation(data.user) || !validation(data.pass)) return 'datos invalidos'
    try{
        const usersInDatabase = await User.find()
        if(usersInDatabase.includes(data.user)) return 'nombre ya existente'

        const newUser = new User({username:data.user, password:data.pass})
        await newUser.save()
        return data.user
    }catch(e){
        console.log(e)
        return 'error'
    }
}

module.exports = {
    registerUser: registerUser,
}