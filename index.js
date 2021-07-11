let http = require('http')
let {usersController} = require('./usersController')

let cors = (res, req) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Request-Method', '*')
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET')
    res.setHeader('Access-Control-Allow-Headers', '*')
    if (res.method === 'OPTIONS') {
        res.writeHead(200)
        res.end()
        return true
    }
    return false
}

let server = http.createServer((req, res) => {

    if (cors(res, req)) return

    switch (req.url) {
        case '/users':
            usersController(res, req)
            break
        case '/lessons':
            res.write(`tasks`)
            break
        default:
            res.write('PAGE NOT FOUND')
    }

    res.end()
})

server.listen(7542)