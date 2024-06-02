function checkRequestTime(req, res, next) {
    next()
    // new Date().getMinutes() % 2 === 0 ? next() : res.status(401).send('The request should be sent at even minutes')
}

module.exports = {checkRequestTime}