const comprobateUrl = (arr, obj) => {
    const firstMap = arr.map((e) => {
        return e.url === obj.url && e.user === obj.user
    })

    return firstMap.includes(true)
}

const validation = (str) => {
    const validate = /^[A-Za-z0-9]+$/g
    if (typeof str !== 'string' || str.length < 4) return false
    if (validate.test(str)) return true

    return false
}

module.exports = {
    comprobateUrl:comprobateUrl,
    validation:validation,
}