const fs = require("fs")
const {readJsonFromFile, writeJsonFromFile} = require('./fs-utils')

const getUsers = () => {
    return readJsonFromFile('./db.json')
}

const addUser = async (name) => {
    let users = await getUsers()
    users.push({name: name})
    return writeJsonFromFile('./db.json', users)
}

exports.getUsers = getUsers
exports.addUser = addUser