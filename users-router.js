const {getUsers, addUser} = require('./repository')

const express = require('express')
const router = express.Router()

router.get('/', async (req, res) => {
    let users = await getUsers()

    if (!!req.query.search) {
        users = users.filter(u => u.name.indexOf(req.query.search) > -1)
    }

    res.send(JSON.stringify(users))
})

router.get('/:id', async (req, res) => {
    let users = await getUsers()
    let userId = req.params.id
    let user = users.find(u => u.id === userId)
    if (user) {
        res.send(user)
    } else {
        res.send(404)
    }
    res.send(JSON.stringify(users))
})

router.post('/', async (req, res) => {
    let result = await addUser(req.body.name)
    res.send(JSON.stringify({success: true}))
})

module.exports = router