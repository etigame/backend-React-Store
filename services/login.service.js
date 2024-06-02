const userService = require('../services/user.service')
const jwt = require('jsonwebtoken')

async function login(userData) {
    // validation tests
    const {email, password} = userData
    if (!email.includes('@')) throw {message: 'Email is not valid'}
    if (password.length < 6) throw {message: 'Password is not valid'}
    if (!email || !password) throw {message: 'Missing details'}

    const user = await userService.getUser(email)
    if (user.email !== email) throw {message: 'There is no user with this email'}
    if (user.password && (user.password !== password)) throw {message: 'Password is not correct'} // i will check it after we will have the password on the user object

    // only if user exist in the system and password is correct - generate token
    const token = jwt.sign({email: user.email, fullName: user.fullName, _id: user._id, permission: user.permission}, process.env.JWT_SECRET)
    return token
}

module.exports = {login}