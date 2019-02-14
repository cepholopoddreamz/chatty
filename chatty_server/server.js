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

//const clientList = {};
// totalclients += 1;
// connetClient(weClient,totalClients);

wss.broadcast = function broadcast(data) {
  console.log('broadcasting');
  wss.clients.forEach(function each(client) {
    client.send(data);
    //array like structure that can give me an array of clients --- with lint
  });
};

wss.on('connection', (ws) => {
  //console.log('Client connected');
//(WsClient, wss.clients.size)

  ws.on('message', message => { //could rename the message, event... as it's a client event
    console.log(message);//printing sent value to the terminal
    const clientMessage = JSON.parse(message);
    switch(clientMessage.type) {
      case "incomingMessage":
        // handle incoming message
        clientMessage.id = uuidv4();
        clientMessage.type = "postMessage"; //-----this overwrites the type that was sent by the client and re-assigns it 
        wss.broadcast(JSON.stringify(clientMessage));
      break;
      case "postNotification":
        clientMessage.type = 'incomingNotification'; 
        clientMessage.content = `${clientMessage.oldname} changed their name to ${clientMessage.newname} `; 
        wss.broadcast(JSON.stringify(clientMessage));
        break;
      //case "userCount": 
      default:
        console.log('no known type')
    }

  });
  ws.on('close', () => console.log('Client disconnected'));

  //on the close, empty the client object  
  // delete clientList[client]
});


