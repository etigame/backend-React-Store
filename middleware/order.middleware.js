const jwt = require('jsonwebtoken')

function checkToken(req, res, next) {
  const token = req.headers.authorization.split(' ')[1]

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    if (decoded) {
        req.body.userId = decoded._id
        next()
    }
  } catch (err) {
    res.status(401).send('Token is not valid')
  }
}

module.exports = { checkToken }
