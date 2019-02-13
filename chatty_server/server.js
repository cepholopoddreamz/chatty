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

wss.broadcast = function broadcast(data) {
  console.log('broadcasting');
  wss.clients.forEach(function each(client) {
    client.send(data);
  });
};


wss.on('connection', (ws) => {
  console.log('Client connected');
  // Set up a callback for when a client closes the socket. This usually means they closed their browser.
  ws.on('message', message => {
    console.log(message);//printing in the terminal
    const clientMessage = JSON.parse(message);
    clientMessage.id = uuidv4()
    clientMessage.type: 'incomingNotification'
    const outgoingMessage = clientMessage;
    console.log(`------------------${outgoingMessage}`);
    wss.broadcast(JSON.stringify(outgoingMessage));
    
  });

  


  ws.on('close', () => console.log('Client disconnected'));
  
});