const merge = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
    devServer: {
        host: 'localhost',
        port: 3000,
        open: true
    },
    mode: 'development'
})