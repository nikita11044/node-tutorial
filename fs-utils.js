const fs = require('fs')

exports.readJsonFromFile = (filepath) => {
    return new Promise((resolve, reject) => {
        fs.readFile(filepath, function(err, buf) {
            if (err) reject(err);
            resolve(JSON.parse(buf.toString()));
        });
    })
}

exports.writeJsonToFile = (filepath, data) => {
    return new Promise((resolve, reject) =>{
        fs.writeFile(filepath, JSON.stringify(data), (err) => {
            if (err) reject(err);
            resolve("Successfully Written to File.");
        });
    })
}