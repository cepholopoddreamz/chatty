import React, {Component} from 'react';
import NavBar from './NavBar.jsx';
import ChatBar from './ChatBar.jsx';
import MessageList from './MessageList.jsx';
const uuidv4 = require('uuid/v4');
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: {name: "Anonymous"},
      messages: [],
      numusers: 0,
      //key: uuidv4(); --- this did nothing to solve error message
    };
  }
  sendMessage = newMessage => {
    this.socketServer.send(JSON.stringify(newMessage))
  }
  addMessage = message => {
    const newMessage = {
     content: message,
     username: this.state.currentUser.name || 'anonymous' ,
     type:'incomingMessage',
     key: uuidv4() //didn't help get rid of error message
    }
    this.sendMessage(newMessage);
  }
  addUser = userName => {
    const message_notification = {oldname:this.state.currentUser.name , newname:userName, type:'postNotification', content:'orange', key: uuidv4()}
    this.sendMessage(message_notification);
    this.setState({ currentUser: {name: userName} }, () => console.log(this.state));
  }
  componentDidMount() {
  const url = 'ws://localhost:3001';
    this.socketServer = new WebSocket(url);
    this.socketServer.onopen = event => {
      this.socketServer.send(JSON.stringify({message: 'testing'}))
    };
    this.socketServer.onmessage = message => {
      const serverMessage = JSON.parse(message.data);
      switch(serverMessage.type) {
        case "postMessage":
        const newServerMessages  = [...this.state.messages, serverMessage];
        this.setState({ messages: newServerMessages  }, () => console.log(this.state))
          break;
        case "incomingNotification":
        const newNotificationMessages  = [...this.state.messages, serverMessage];
        this.setState({ messages: newNotificationMessages  }, () => console.log(this.state))
          break;
        case "numclients":
        this.setState({ numusers: serverMessage.numcon}, () => console.log(this.state))
          break;  
        default:
        // show an error in the console if the message type is unknown
        console.log("Unknown event type " + data.type);
      }
    };
  }
  render() {
    return (
      <div>
      <NavBar />
      <MessageList messages = {this.state.messages} username = {this.state.currentUser.name}/>
      <ChatBar addMessage={this.addMessage} addUser={this.addUser}/>
      <NavBar numberusers = {this.state.numusers}/>
      </div>
    );
  }
}
export default App;


