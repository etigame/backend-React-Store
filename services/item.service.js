const itemController = require('../DL/item.controller')

async function getAllItems(filter={}, sortCriteria) {
    return await itemController.read(filter, sortCriteria)
}

async function getItem(_id) {
    //validation tests
    if (!_id) throw {message: 'Invalid id'}
    const item = await itemController.readOne({_id})
    if (!item) throw {code: 404, message: 'Item is not exist'}

    return item
}

async function removeItem(_id) {
    //validation tests
    if (!_id) throw {message: 'Invalid id'}
    const item = await itemController.readOne({_id})
    if (!item) throw {code: 404, message: 'Item is not exist'}

    return await itemController.remove(_id)
}

async function addItem(newItem) {
    const {name, category, subCategory, emoji, price} = newItem

    //validation tests
    if (!name || !category || !subCategory || !emoji || !price) throw {message: 'Details of new item are missing'}
    const item = await itemController.readOne({name})
    if (item) throw {message: 'Item with same name is already exist'}
    if (isNaN(price)) throw {message: 'Price is not valid'}

    return await itemController.create(newItem)
}

async function updateItem(_id, updatedData) {
    // validation tests
    if (!updatedData || updatedData === {}) throw {message: 'No data to update'}
    const item = await itemController.readOne({_id})
    if (!item) throw {code: 404, message: 'Item is not exist'}
    if (updatedData.price && isNaN(updatedData.price)) throw {message: 'Price is not valid'}

    return await itemController.update(_id, updatedData)
}

module.exports = {getAllItems, getItem, removeItem, addItem, updateItem}