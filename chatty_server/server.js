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
  //console.log('Client connected');
  ws.on('message', message => {
    console.log(message);//printing sent value to the terminal
    const clientMessage = JSON.parse(message);
    clientMessage.id = uuidv4();
    clientMessage.type = 'incomingNotification'; 
    const outgoingMessage = clientMessage;
    console.log(`------------------${outgoingMessage}`);
    wss.broadcast(JSON.stringify(outgoingMessage));
  });
  ws.on('close', () => console.log('Client disconnected'));
});


/*
switch(data.type) {
      case "incomingMessage":
        // handle incoming message
        break;
      case "incomingNotification":
        // handle incoming notification
        break;
      default:
        // show an error in the console if the message type is unknown
        throw new Error("Unknown event type " + data.type);
    }
    */