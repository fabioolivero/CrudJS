const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://localhost/ToDoDB'
const app = express()

mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection

con.on('open', () => {
        console.log('connected!')
    })

app.use(express.json())

const todoRouter = require('./routes/todos')
app.use('/todo',todoRouter)

app.listen(27017, () => {
        console.log('Server started')
    })