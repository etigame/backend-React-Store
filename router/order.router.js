const express = require('express')
const router = express.Router()
const orderService = require('../services/order.service')
const {checkToken} = require('../middleware/order.middleware')

router.get('/', async (req, res) => {
  try {
    const {after, before} = req.query
    const orders = await orderService.getAllOrders({created: {$gte: after, $lte: before}})
    res.send(orders)
  } catch(err) {
    res.status(err.code || 400).send(err.message)
  }
})

router.get('/:id', async (req, res) => {
  try {
    const order = await orderService.getOrder(req.params.id)
    res.send(order)
  } catch (err) {
    res.status(err.code || 400).send(err.message)
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const orderId = await orderService.removeOrder(req.params.id)
    res.send(orderId)
  } catch (err) {
    res.status(err.code || 400).send(err.message)
  }
})

router.put('/:id', async (req, res) => {
  try {
    const updatedOrder = await orderService.updateOrder(req.params.id, req.body)
    res.send(updatedOrder)
  } catch (err) {
    res.status(err.code || 400).send(err.message)
  }
})

router.post('/', checkToken, async (req, res) => {
  try {
    const newOrder = await orderService.addOrder(req.body)
    res.send(newOrder)
    console.log(newOrder)
  } catch (err) {
    res.status(err.code || 400).send(err.message)
  }
})

module.exports = router