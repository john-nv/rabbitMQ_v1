const express = require('express')
const morgan = require('morgan')
const {default: helmet} = require('helmet')
const prematch = require('./API/PrematchGame/route')
const compression = require('compression')
require('dotenv').config()
const app = express()
const router = require('./router')

// app.use(morgan('dev')) //combined short
// app.use(helmet())
// app.use(compression())

// app.use(express.json({ limit: '10mb' }))
// app.use(express.urlencoded({ limit: '10mb', extended: true }))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

router(app)
// app.get('/', (req,res,next) => {
//     return res.status(200).json({
//         msg: 'welcome',
//     })
// })

app.listen(process.env.PORT, () => {
    console.log(`start port ${process.env.PORT}`)
})

// module.exports = app