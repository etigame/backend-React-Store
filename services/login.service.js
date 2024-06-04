const userService = require('../services/user.service')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

async function login(userData) {
    // validation tests
    const {email, password} = userData
    if (!email.includes('@')) throw {message: 'Email is not valid'}
    if (password.length < 6) throw {message: 'Password is not valid'}
    if (!email || !password) throw {message: 'Missing details'}

    // I insert the "password" for the select parameter, tell the Schema to allow send the password. "+" means - select all fields and also the password field
    const user = await userService.getUser(email, "+password")
    if (user.email !== email) throw {message: 'There is no user with this email'}
    const isPasswordValid = await bcrypt.compare(password, user.password)
    if (!isPasswordValid) throw {message: 'Password is not valid'}

    // only if user exist in the system and password is correct - generate token
    const token = jwt.sign({email: user.email, fullName: user.fullName, _id: user._id, permission: user.permission}, process.env.JWT_SECRET)
    return token
}

module.exports = {login}