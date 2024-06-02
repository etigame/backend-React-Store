const mongoose = require('mongoose')

const itemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    subCategory: {
        type: String,
        required: true
    },
    emoji: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    permission: {
        type: String,
        default: 'admin'
    },
    created: {
        type: Date,
        default: Date.now
    },
    isActive: {
        type: Boolean,
        default: true
    }
})

const itemModel = mongoose.model('item', itemSchema)
module.exports =  itemModel