// this file configures the connection to mongoDB

const mongoose = require('mongoose')

const connect = async () => {
    const MONGO_URL = process.env.MONGO_URL

    try {
        mongoose.connect(MONGO_URL).then(() => console.log('DB is connected'))
    } catch  (err) {
        console.log('Error DB\n', err)
    }
}

module.exports = {connect}