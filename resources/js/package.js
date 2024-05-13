function getPOPExtra(from, to) {
    if (!config.category) {
        return 0
    }

    let add = 0
    Object.keys(config.category['banners']).forEach(key => {
        key.split(',').forEach(x => {
            if(!isNaN(x) && x <= to && x >= from) {
                add++
            }
        })
    })

    return add
}

Vue.prototype.getPOPCount = function (count, pageSize) {
    let curCount = count % window.app.getPOPSize(pageSize)
    return curCount + getPOPExtra(0, curCount)
}

Vue.prototype.getPOPSize = function(pageSize) {
    return pageSize - getPOPExtra(0, pageSize)
}
