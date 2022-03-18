const express = require('express')
const app = express()
const cors = require('cors')
const body_parser = require('body-parser')
const websiteroute = require('./routes/websiteRoute')
require('dotenv').config()
app.use(cors())
app.use(body_parser.urlencoded({extended: false}))

app.use('/api',websiteroute)

const port = process.env.PORT
app.listen(port,()=>console.log('App is listening on ' + port))