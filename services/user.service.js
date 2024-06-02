let userController = require('../DL/user.controller')

async function getAllUsers(filter={}) {
  return await userController.read(filter)
}

async function getUser(email) {
  // validation tests
  if (!email) throw {message: 'Invalid email'} // here i choose not to send code error
  const user = await userController.readOne({email})
  if (!user) throw {code: 404, message: 'User is not exist'} // this is the Error object, here i choose to send code error

  return user
}

async function removeUser(email) {
  // validation tests
  if (!email) throw {message: 'Invalid email'}
  const user = await userController.readOne({email})
  if (!user) throw {code: 404, message: 'User is not exist'}

  return await userController.remove(email)
}

async function addUser(newUser) {
  const { email, password, fullName } = newUser // i want to destruct the body because i want to control the received data and protect from evil data/actions that maybe is in it. i'll send to the controller only the authorized data. 

  // validation tests
  const user = await userController.readOne({email})
  if (user) throw {message: 'User already exist'}
  if (!email.includes('@')) throw {message: 'Address is not valid'}
  if (password.length < 8) throw {message: 'Password is not valid'}
  if (!fullName.includes(' ')) throw {message: 'Full name is not valid'}

  return await userController.create(newUser)
}

async function updateUser(email, updatedData) {
  // validation tests
  if (!updatedData || updatedData === {}) throw {message: 'No data to update'}
  const user = await userController.readOne({email})
  if (!user) throw {code: 404, message: 'User is not exist'}
  if (updatedData.password && updatedData.password.length < 8) throw {message: 'Password is not valid'}
  if (updatedData.fullName && !updatedData.fullName.includes(' ')) throw {message: 'Full name is not valid'}

  return await userController.update(email, updatedData)
}

module.exports = {
  getAllUsers,
  addUser,
  updateUser,
  getUser,
  removeUser
}
