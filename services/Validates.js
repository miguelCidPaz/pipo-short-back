/**
 * Receives the arr of urls and reviews it in case the user already has that url tracked
 * 
 * @param {mongoose data} arr 
 * @param {code} obj 
 * @returns 
 */
const comprobateUrl = (arr, obj) => {
    const firstMap = arr.map((e) => {
        return e.url === obj.url && e.user === obj.user
    })

    return firstMap.includes(true)
}

/**
 * The string is validated character by character so that no script is sneaked
 * 
 * @param {string} str 
 * @returns 
 */
const validation = (str) => {
    const validate = /^[A-Za-z0-9]+$/g
    if (typeof str !== 'string' || str.length < 4) return false
    if (validate.test(str)) return true

    return false
}

/**
 * Count the Clicks documents and format the response
 * 
 * @param {Clicks} data 
 * @returns 
 */
const getDetails = (data) => {
    const languages = []
    const platforms = []
    const code = data[0].code


    for (const item of data) {
        //Languages
        const comprobateLanguage = languages.includes(item.language)
        if (!comprobateLanguage && item.language !== undefined) {
            languages.push(item.language)
        }
        const indexLanguage = languages.indexOf(item.language) + 1
        languages[indexLanguage] ? languages[indexLanguage] += 1 : languages[indexLanguage] = 1

        //Platforms
        const comprobatePlatform = platforms.includes(item.platform)
        if (!comprobatePlatform && item.platform !== undefined) {
            platforms.push(item.platform)
        }
        const indexPlatform = platforms.indexOf(item.platform) + 1
        platforms[indexPlatform] ? platforms[indexPlatform] += 1 : platforms[indexPlatform] = 1
    }
    return {code: code, platforms: platforms, languages: languages}
}

module.exports = {
    comprobateUrl: comprobateUrl,
    validation: validation,
    getDetails: getDetails
}