/**
 * JSON-parsed Object from socket client
 * @typedef {Object} socketMsgData
 * @property {String} [message]
 * @property {String} [meta]
 * @property {String} room
 */

/**
 * Example of using nested object
 * @typedef {Object} nestedExample
 * @property {String} message
 * @property {{text: String, callback: Function}} meta
 * @property {String} room
 */

/** 
 * @callback broadCastMessage
 * @param {String} room
 * @param {String} message
 */

/**
 * @callback handleRoom
 * @param {String} room
 */

/**
 * @callback leaveSocket
 * @param {String} room
 */

/**
 * Type of exchange data between client - server
 * @typedef {String} exchangeData
 */

 exports.typeDefs = {}