let orderModel = require('./order.model')

async function create(newOrder) {
    return await orderModel.create(newOrder)
}

async function read(filter={}, populate) {
    return await orderModel.find(filter).populate(populate)
}

async function readOne(filter, populate) {
    return await orderModel.findById(filter).populate(populate)
}

async function update(_id, updatedData) {
    const update = updatedData
    
    return await orderModel.findByIdAndUpdate(_id, update, {returnDocument: 'after'})

    // let updatedItem = {}

    // orderModel = orderModel.map(item => {
    //     if (item.id === itemId) {
    //         updatedItem = {...item, ...updatedData}
    //         return updatedItem
    //     } else return item
    // })

    // return updatedItem
}

async function remove(_id) {
    await orderModel.findByIdAndDelete(_id)
    return _id
}

module.exports = {create, read, readOne, update, remove}