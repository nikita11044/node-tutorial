let {getUsers, addUser} = require('./repository')

exports.usersController = async (res, req) => {
    if (req.method === 'POST') {
        await addUser('Dima')
        res.write(JSON.stringify({success: true}))
        res.end()
    } else {
        let users = await getUsers()
        res.write(JSON.stringify(users))
        res.end()
    }
}