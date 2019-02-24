// Listen to a websocket event
exports.webSocketEvent = function (event) {

  if (event.type == 'open') {
    // Do something on open
  }

  if (event.type == 'message') {
    // Do something on message recieved
  }

  if (event.type == 'close') {
    // Do something on close
  }

};
