const comprobateUrl = (arr, obj) => {
    const firstMap = arr.map((e) => {
        return e.url === obj.url && e.user === obj.user
    })

    return firstMap.includes(true)
}

module.exports = {
    comprobateUrl:comprobateUrl,
}