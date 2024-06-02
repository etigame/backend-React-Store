const express = require('express')
const router = express.Router()
const userService = require('../services/user.service')


router.get('/', async (req, res) => {
  try {
    const users = await userService.getAllUsers()
    res.send(users)
  } catch (err) {
    res.status(err.code || 400).send(err.message)
  }
})

router.get('/:email', async (req, res) => {
  try {
    const user = await userService.getUser(req.params.email)
    res.send(user)
  } catch (err) {
    res.status(err.code || 400).send(err.message)
  }
})

router.delete('/:email', async (req, res) => {
  try {
    const email = await userService.removeUser(req.params.email)
    res.send(email)
  } catch (err) {
    res.status(err.code || 400).send(err.message)
  }
})

router.post('/', async (req, res) => {
  try {
    const newUser = await userService.addUser(req.body)
    res.send(newUser)
  } catch (err) {
    res.status(err.code || 400).send(err.message)
  }
})

router.put('/:email', async (req, res) => {
try {
const updatedUser = await userService.updateUser(req.params.email, req.body)
res.send(updatedUser)
} catch (err) {
res.status(err.code || 400).send(err.message)
}
})



module.exports = router