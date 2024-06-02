const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true, // the email is unique, there are no duplicates
        required: true
    },
    fullName: {
        type: String,
        required: true
    }, 
    password: { // password isn't required, example: googleLogin don't transfer passwords
        type: String, 
        select: false // configure that i can't pull the password in any query
    },
    permission: { // configure who permits to change the user data
        type: String,
        enum: ['user', 'admin'], // enum is an array of constant values
        default: 'user' 
    },
    created: {
        type: Date,
        default: Date.now
    },
    isActive: { // we won't delete data from DB - even irrelevant data is important for business, and that's why we need this field
        type: Boolean, 
        default: true
    }
})

const userModel = mongoose.model('user', userSchema) // that's how i create collection and configure it's schema

module.exports = userModel