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

const getAllUrls = (infos) => {
    const result = []
    for (const info of infos) {
        const comprobate = result.includes(info.code)
        if (!comprobate && info.code !== undefined) {
            result.push(info.code)
        }
        const index = result.indexOf(info.code)+1
        result[index] ? result[index] += 1 : result[index] = 1
    }
    return result
}

module.exports = {
    comprobateUrl: comprobateUrl,
    validation: validation,
    getAllUrls: getAllUrls
}