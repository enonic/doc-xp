// Lib that contains websocket functions.
var webSocketLib = require('/lib/xp/websocket');

// Listen to a websocket event
exports.webSocketEvent = function (event) {

  if (event.type == 'open') {
    // Send message back to client
    webSocketLib.send(event.session.id, 'Welcome to our chat');

    // Add client into a group
    webSocketLib.addToGroup('chat', event.session.id);
  }

  if (event.type == 'message') {
    // Propegate message to group
    webSocketLib.sendToGroup('chat', event.message);
  }

  if (event.type == 'close') {
    // Remove client from a group
    webSocketLib.removeFromGroup('chat', event.session.id);
  }

};
