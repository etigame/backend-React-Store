let itemModel = require('./item.model')

async function create(newItem) {
    return await itemModel.create(newItem)
}

async function read(filter={}, sortCriteria) {
    return await itemModel.find(filter).sort(sortCriteria)
}

async function readOne(filter) {
    return await itemModel.findById(filter)
}

async function update(_id, updatedData) {
    const update = updatedData
    
    return await itemModel.findByIdAndUpdate(_id, update, {returnDocument: 'after'})

    // let updatedItem = {}

    // itemModel = itemModel.map(item => {
    //     if (item.id === itemId) {
    //         updatedItem = {...item, ...updatedData}
    //         return updatedItem
    //     } else return item
    // })

    // return updatedItem
}

async function remove(_id) {
    await itemModel.findByIdAndDelete(_id)
    return _id
}

module.exports = {create, read, readOne, update, remove}