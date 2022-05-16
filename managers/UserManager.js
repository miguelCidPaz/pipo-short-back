const User = require('../schemas/User')
const { validation } = require('./../services/Validates')
const config = require('../config')
const jwt = require('jsonwebtoken')

/**
 * User registration, we check that the name is not already in the db and we register 
 * it by returning the username and a token
 * 
 * @param {*} data 
 * @returns false for a bad request or a bad validation, token and username for a good register
 */
const registerUser = async (data) => {
    if (!validation(data.user) || !validation(data.pass)) return false
    try {
        const usersInDatabase = await User.find({username: data.user})
        if (usersInDatabase.length > 0) return false

        const newUser = new User({ username: data.user, password: data.pass })
        await newUser.save()

        const userForToken = {
            id: newUser._id,
            username: newUser.username
        }

        const token = jwt.sign(userForToken, config.CLAVE_JWT, { expiresIn: '7d' })

        return { username: newUser.username, token: token }
    } catch (e) {
        console.log(e)
        return false
    }
}

/**
 * Login of the user we will validate the fields and we will 
 * look for an object that matches the username and the pass
 * 
 * @param {*} data 
 * @returns false for a bad request or a bad validation, token and username for a good login
 */
const login = async(data) => {
    if (!validation(data.user) || !validation(data.pass)) return false
    try {
        const userFind = await User.find({ username: data.user, password: data.pass })
        if (userFind.length < 1) return false
        const userForToken = {
            id: userFind[0]._id,
            username: userFind[0].username
        }
        const token = jwt.sign(userForToken, config.CLAVE_JWT, { expiresIn: '7d' })
        return {username: userForToken.username, token: token}
    } catch (e) {
        console.log(e)
        return false
    }
}

module.exports = {
    registerUser: registerUser,
    login: login,
}