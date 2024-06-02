const express = require('express')
const app = express()
const PORT = 3000

const cors = require('cors')
app.use(cors())

app.use(express.json())

const dotenv = require('dotenv')
dotenv.config()

const db = require('./DL/db')
db.connect()

const userRouter = require('./router/user.router')
app.use('/user', userRouter)

const itemRouter = require('./router/item.router')
app.use('/item', itemRouter)

const orderRouter = require('./router/order.router')
app.use('/order', orderRouter)

const loginRouter = require('./router/login.router')
app.use('/login', loginRouter)

app.listen(PORT, () => console.log('Server is up - port 3000'))
