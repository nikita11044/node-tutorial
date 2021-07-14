const express = require('express')
const users = require('./users-router')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')

app.use(cors())
app.use(bodyParser.json())
app.use('/users', users)

app.get('/tasks', async (req, res) => {
    res.send('tasks')
})

app.use((req, res) => {
    res.send(404)
})

app.listen(7542, function () {
    console.log('Example listening on 7542')
})