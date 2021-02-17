const express = require('express')
const router = express.Router()
const Todo = require('../models/todo')

router.get('/', async(req,res) => {
    try{
        const todos = await Todo.find()
        res.json(todos)
    }catch(err){
        res.send('Error ' + err)
    }
})

router.post('/', async(req,res) => {
    const todo = new Todo({
        desc: req.body.desc,
    })

    try{
        const a1 =  await todo.save() 
        res.json(a1)
    }catch(err){
        res.send('Error')
    }
})

module.exports = router