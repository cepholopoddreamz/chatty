import React, {Component} from 'react';
import NavBar from './NavBar.jsx';
import ChatBar from './ChatBar.jsx';
import MessageList from './MessageList.jsx';
//npm install --save-dev webpack-dev-server@3.1.14
import uuid from 'uuid';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    //loading: true,
      // messages: [{
      //   username: 'Fred Moten',
      //   content: "we can speculate on the relay of our common activity, make a circle round our errant roots. Dancing is what we make of falling. Music is what we make of music's absence, the real presence making music underneath. I'm exhausted so my soul is rested.",
      //   id: uuid.v1()
      // }],
      // currentUser: '' 
      currentUser: {name: "Bob"},
      messages: [] 
      //because currentUser is now an object, where it was referenced befow, i needed to add the key currentUser.name so it doesn't just return object object
    };
  }

  sendMessage = newMessage => {
    this.socketServer.send(JSON.stringify(newMessage))
  }

  addMessage = message => {
    const newMessage = {
     content: message,
     username: this.state.currentUser.name || 'anonymous' ,
     //id: uuid.v1()
    }
    this.sendMessage(newMessage);
    // merging my current array of quotes with new quotes
    const newMessages = [...this.state.messages, newMessage];
    //console.log(newMessage);
    this.setState({ messages: newMessages }, () => console.log(this.state));
  }


  addUser = userId => {
    this.setState({ currentUser: {name: userId} }, () => console.log(this.state));
  }
  componentDidMount() {
  // const url = 'ws://localhost:3001/';
  // this.socket = new Websocket(url);
  // this.socket.onopen = event => {
  //   console.log("Connected to socket server ")
  //   this.socket.send(JSON.stringify({message:`hello`}))
  // }
  const url = 'ws://localhost:3001';
    this.socketServer = new WebSocket(url);

    this.socketServer.onopen = event => {
      //this.updateStatus(true);

      this.socketServer.send(JSON.stringify({message: 'testing'}))
    };

    this.socketServer.onmessage = message => {
      const serverMessage = JSON.parse(message.data);
      console.log(`incomingid-----${serverMessage.content}`)
      //console.log(`incomingmessage-----${serverMessage.name}`)
      console.log(serverMessage.username)
      console.log(message)

      //clientMessage
      //app.server.send
      //ws.send (serverMessage);
      // switch (serverMessage.type) {
      //   case 'incomingNotification':
      //     this.addNewNotification(serverMessage);
      //     break;
      //   default:
      //     console.log('Unknown message from server');
      // }
    };
  }
  render() {
    return (
      <div>
      <NavBar />
      <MessageList messages = {this.state.messages} username = {this.state.currentUser.name} />
      <ChatBar addMessage={this.addMessage} addUser={this.addUser}/>
      </div>
    );
  }
}
export default App;

//onSubmit = {this.onSubmit}

///you need to add state - each component has a state that holdes the value  /// it was looking for a value in your class only. 