const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
  items: {
    type: [
      {
        itemId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'item',
          required: true,
        },
        qty: {
          type: Number,
          required: true,
        },
      },
    ],
  },
  created: {
    type: Date,
    default: Date.now,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
})

const orderModel = mongoose.model('order', orderSchema)
module.exports = orderModel