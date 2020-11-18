console.info('process.env.NODE_ENV:', process.env.NODE_ENV)
if (process.env.NODE_ENV === 'development') {
    module.exports = require('./config/webpack.dev.config');
} else {
    module.exports = require('./config/webpack.prod.config');
}
