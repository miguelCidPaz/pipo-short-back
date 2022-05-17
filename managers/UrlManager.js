const url = require("../schemas/recordUrl")
const Clicks = require('../schemas/Clicks')
const config = require("../config")
const Validates = require("../services/Validates")

/**
 * Create a random code and the object that we will insert in the DB.
 * Check if the user is anonymous and avoid duplicates if possible.
 * Returns the url if it was previously registered by the user
 * 
 * @param {*} data 
 * @returns 
 */
const shortUrl = async (data) => {

    try {
        const code = await verifyCode();
        const newUrl = { code: code, url: data.url, user: data.user }

        //Intentamos la conexion a la DB
        const saveInDatabase = await url.find({ url: newUrl.url, user: newUrl.user });

        //Si el usuario es anonimo o si no es anonimo que no tenga esa url ya registrada
        if (newUrl.user === 'anon' || !Validates.comprobateUrl(saveInDatabase, newUrl)) {

            //Si el usuario no es anonimo o si ningun anonimo registro ese enlace
            if (newUrl.user !== 'anon' || saveInDatabase.length < 1) {
                const urlStored = new url(newUrl);
                urlStored.save();
                return `${config.URL_FRONT + code}`
            }

            //Si el usuario es anonimo y ya se registro ese enlace
            const saveCode = saveInDatabase[0]
            return `${config.URL_FRONT + saveCode.code}`

        } else {
            //Si el usuario no es anonimo y ya tenemos registrada su url, se la devolvemos
            return `${config.URL_FRONT + saveInDatabase[0].code}`
        }

    } catch (e) {
        //Fallo la conexion
        return ''
    }
}

/**
 * Create a code and make sure that the db does not contain any equal
 */
const verifyCode = async() => {
    let comp = false
    let code = ''
    while(!comp){
        code = Math.random().toString(36).substr(2, 5);
        const codesDB = await url.find({code: code})
        comp = codesDB.length === 0
    }
    return code
}


const getUrl = async (data) => {
    try {
        //Busqueda en la DB
        const SavedInDatabase = await url.find({ code: data.code })

        if (SavedInDatabase.length < 1) return config.URL_FRONT // No se encontro nada
        if (SavedInDatabase[0].user === 'anon') return SavedInDatabase[0].url // Se encontro pero el code pertenece a un anon

        const myInfo = new Clicks(data)
        myInfo.save()
        return SavedInDatabase[0].url
    } catch (e) {
        return config.URL_FRONT
    }
}

const getInfo = async (data) => {
    try {
        const allmyUrls = await url.find({ user: data.username });
        if (allmyUrls.lenght < 1) return []

        const allClicks = await Clicks.find()
        const response = allmyUrls.map((e,i) => {
            let code = e.code
            let url = e.url
            let clicks = 0
            for(const click of allClicks){
                if(click.code === code){
                    clicks += 1
                }
            }
            return {code: code, url: url, totalclicks: clicks}
        })

        return response
    } catch (e) {
        console.log(e)
        return []
    }
}

const getDetail = async (code) => {
    try {
        const allClicks = await Clicks.find({ code: code })
        if (allClicks.length < 1) return []

        const response = Validates.getDetails(allClicks)
        return response
    } catch (e) {
        console.log(e)
        return []
    }
}

module.exports = {
    shortUrl: shortUrl,
    getUrl: getUrl,
    getInfo: getInfo,
    getDetail: getDetail
}