// server.js

const express = require('express');
const SocketServer = require('ws').Server;
const uuidv4 = require('uuid/v4');

// Set the port to 3001
const PORT = /*process.env.port ||*/ 3001;
const app = express ();

// Create a new express server
const server = app.listen(PORT, () => {
  console.log(`WebSocket Server Running on Port: ${PORT}`);

})

const wss = new SocketServer({ server });

// Set up a callback that will run when a client connects to the server
// When a client connects they are assigned a socket, represented by
// the ws parameter in the callback.
wss.broadcast = function broadcast(data) {
  wss.clients.forEach(function each(client) {
    if (client.readyState === SocketServer.OPEN) {
      client.send(data);
    }
  });
};

wss.on('connection', (ws) => {
  console.log('Client connected');
  // Set up a callback for when a client closes the socket. This usually means they closed their browser.
  ws.on('message', message => {
    const clientMessage = JSON.parse(message);
    console.log(message);
  });

  ws.on('close', () => console.log('Client disconnected'));
  
});