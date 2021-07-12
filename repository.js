let users = [
    {"id": "1", "banned": true, "name": "Sasha"},
    {"id": "2", "name": "Artem"}
]

const getUsers = () => {
    return users
}

const addUser = (name) => {
    debugger
    users.push({id: 3, name: name})
}

exports.getUsers = getUsers
exports.addUser = addUser