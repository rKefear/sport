const path = require('path')

module.exports = {
    entry: path.resovle(__dirname, 'src', 'index.js') ,
    output: {
        filename: 'bundle.js',
        path: path.resovle(__dirname, 'build')
    }
}