let userModel = require('./user.model')

async function create(newUser) {
  return await userModel.create(newUser)
}

async function read(filter = {}) {
  return await userModel.find(filter)
}

async function readOne(filter) {
  return await userModel.findOne(filter)
}

async function update(email, updatedData) {
  const filter = { email }
  const update = updatedData

  return await userModel.findOneAndUpdate(filter, update, { new: true })

  // * old version *
  // let updatedUser = {}
  // userModel = await userModel.map((user) => {
  //   if (user.email === email) {
  //       updatedUser = { ...user, ...updatedData }
  //       return updatedUser
  //   } else return user
  // })
  // return updatedUser

  // * old old version *
  // const userIdx = userModel.findIndex(user => user.email === email)
  // const updatedUser = { ...userModel[userIdx], ...updatedData }
  // userModel.splice(userIdx, 1, updatedUser)
  // return updatedUser
}

async function remove(email) {
  await userModel.deleteOne({ email })
  return email
}

module.exports = { create, read, readOne, update, remove }
