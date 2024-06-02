const express = require('express')
const router = express.Router()
const loginService = require('../services/login.service')

router.post('/', async (req, res) => {
    try {
        const token = await loginService.login(req.body)
        res.send(token)
    } catch(err) {
        res.status(err.code || 400).send(err.message)
    }
})

module.exports = router