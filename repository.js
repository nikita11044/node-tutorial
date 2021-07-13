let fs = require("fs");
const {readJsonFromFile, writeJsonToFile} = require('./fs-utils')

const getUsers = async () => {
    return await readJsonFromFile('db.json')
}

const addUser = async (name) => {
    let users = await getUsers()
    users.push({id: 3, name: name})
    return await writeJsonToFile('db.json', users)
}

exports.getUsers = getUsers
exports.addUser = addUser