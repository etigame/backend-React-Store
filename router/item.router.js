const express = require('express')
const router = express.Router()
const itemService = require('../services/item.service')
const {checkRequestTime} = require('../middleware/item.middleware')

router.get('/', checkRequestTime , async (req, res) => {
  try {
    let {category, subCategory, minPrice, maxPrice, name, sortField, sortOrder, skip, limit} = req.query

    // after destructing the query, i build the filter object to ensure that mongoDB find method won't get undefined values:
    let filter = {}
    if (category) filter.category = category
    if (subCategory) filter.subCategory = subCategory
    if (minPrice != null && maxPrice != null) filter.price = {$gte: Number(minPrice), $lte: Number(maxPrice)}
    else if (minPrice != null) filter.price = {$gte: Number(minPrice)}
    else if (maxPrice != null) filter.price = {$lte: Number(maxPrice)}
    if (name) filter.name = {$regex: new RegExp(name, 'i')}

    // now i build the sort object to ensure that mongoDB sort method won't get undefined values:
    // Default to sorting by name in ascending order if no sortField or sortOrder is provided
    const sortCriteria = {}
    if (sortField) {
      sortCriteria[sortField] = sortOrder === 'desc' ? -1 : 1
    } else {
      sortCriteria.name = 1 // default sorting
    }

    if (skip) skip = Number(skip)
    if (limit) limit = Number(limit)
    
    const items = await itemService.getAllItems(filter, sortCriteria, skip, limit)
    res.send(items)
  } catch(err) {
    res.status(err.code || 400).send(err.message)
  }
})

router.get('/:id', async (req, res) => {
  try {
    const item = await itemService.getItem(req.params.id)
    res.send(item)
  } catch (err) {
    res.status(err.code || 400).send(err.message)
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const itemId = await itemService.removeItem(req.params.id)
    res.send(itemId)
  } catch (err) {
    res.status(err.code || 400).send(err.message)
  }
})

router.put('/:id', async (req, res) => {
  try {
    const updatedItem = await itemService.updateItem(req.params.id, req.body)
    res.send(updatedItem)
  } catch (err) {
    res.status(err.code || 400).send(err.message)
  }
})

router.post('/', async (req, res) => {
  try {
    const newItem = await itemService.addItem(req.body)
    res.send(newItem)
  } catch (err) {
    res.status(err.code || 400).send(err.message)
  }
})

module.exports = router