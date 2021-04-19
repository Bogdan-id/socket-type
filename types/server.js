const { Server } = require('http')
const WebSocketServer = require('ws').Server

/**
 * @callback createSocket
 * @param {Server} server
 * @return {WebSocketServer}
 */