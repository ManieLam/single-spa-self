#!/usr/bin/env node
/* https://www.cnblogs.com/scdisplay/p/11648701.html */

/**
 * Module dependencies.
 */

var app = require('./index');
var fs = require('fs')
var debug = require('debug')('product:server');
var http = require('http');
const chalk = require("chalk")
var configs = require('../public/apps.config.json');

/**
 * Get port from environment and store in Express.
 */
var port = normalizePort(process.env.PORT || '3040');
app.set('port', port);

/**
 * Create HTTP server.
 */

var server = http.createServer(app);

//修改配置文件，添加路径
configs.apps.forEach(function (item) {
  item.server = 'http://localhost:' + port + '/' + item.name + '/static/js/';
})
fs.writeFileSync('./public/apps.config.json', JSON.stringify(configs));

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port, function () {
  console.log(chalk.green(`Congratulations, No error, please visit here: http://localhost:${port}`))
});
server.on('error', onError);
server.on('listening', onListening);

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort (val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError (error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening () {
  var addr = server.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);
}
