const orderController = require('../DL/order.controller')

async function getAllOrders(filter={}) {
    const populate = 'userId'
    return await orderController.read(filter, populate)
}

async function getOrder(_id) {
    //validation tests
    if (!_id) throw {message: 'Invalid id'}
    const populate = ['items.itemId', 'userId']
    const order = await orderController.readOne({_id}, populate)
    if (!order) throw {code: 404, message: 'Order is not exist'}

    return order
}

async function removeOrder(_id) {
    //validation tests
    if (!_id) throw {message: 'Invalid id'}
    const order = await orderController.readOne({_id})
    if (!order) throw {code: 404, message: 'Order is not exist'}

    return await orderController.remove(_id)
}

async function addOrder(newOrder) {
    const {items, userId} = newOrder

    //validation tests
    if (!userId || items.length === 0) throw {message: 'Details of new order are missing'}

    return await orderController.create(newOrder)
}

async function updateOrder(_id, updatedData) {
    // validation tests
    if (!updatedData || updatedData === {}) throw {message: 'No data to update'}
    const order = await orderController.readOne({_id})
    if (!order) throw {code: 404, message: 'Order is not exist'}
    if (updatedData.items.length === 0) throw {message: 'Order is not valid'}

    return await orderController.update(_id, updatedData)
}

module.exports = {getAllOrders, getOrder, removeOrder, addOrder, updateOrder}