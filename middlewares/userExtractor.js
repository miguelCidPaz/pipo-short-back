const jwt = require('jsonwebtoken')
const config = require('../config')

module.exports = (request, response, next) => {
    let authorization = null
    let decodedToken = null
    let token = ''

    //Se abre un try catch por que a la hora de verificar el token puede escupir error
    try {
        //Se recoge la cabecera authorization de la request
        authorization = request.get('authorization')
        //Comprobamos si es valida y normalizando el token quitamos el bearer
        if (authorization && authorization.toLowerCase().startsWith('bearer')) {
            token = authorization.split(' ')[1]
        }
        //Con el token normalizado, sin el bearer, se le pasa a jwt el token y la clave que ya usamos
        decodedToken = jwt.verify(token, config.CLAVE_JWT)
    } catch (e) {
        return response.status(404).json({error: 'not token'})
    }

    //Si no hay token o si es invalido o no se encuentra el id dentro de el
    if (!token || !decodedToken.id) {
        return response.status(401).json({ error: 'token missing or invalid' })
    }

    //Se saca el id del token si todo fue bien
    const { id: userId } = decodedToken

    //le devolvemos a la request el userID
    request.userId = userId

    next();
}