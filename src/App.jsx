import React, {Component} from 'react';
import NavBar from './NavBar.jsx';
import ChatBar from './ChatBar.jsx';
import MessageList from './MessageList.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: {name: "Anonymous"},
      messages: [] 
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
     type:'incomingMessage'
    }
    this.sendMessage(newMessage);
    // merging my current array of quotes with new quotes
    // const newMessages = [...this.state.messages, newMessage];
    // //console.log(newMessage);
    // this.setState({ messages: newMessages }, () => console.log(this.state));
  }


  addUser = userName => {
    const dummy_notification = {oldname:this.state.currentUser.name , newname:userName, type:'postNotification'}
    this.sendMessage(dummy_notification);
    this.setState({ currentUser: {name: userName} }, () => console.log(this.state));

    
  }

  //{type: postNotification}


  componentDidMount() {
  const url = 'ws://localhost:3001';
    this.socketServer = new WebSocket(url);

    this.socketServer.onopen = event => {
      //this.updateStatus(true);

      this.socketServer.send(JSON.stringify({message: 'testing'}))
    };

    this.socketServer.onmessage = message => {
      const serverMessage = JSON.parse(message.data);
      console.log(`incomingid-----${serverMessage.content}`)
      // console.log(serverMessage.username)
      console.log(serverMessage.type);
      console.log(message);
      const newServerMessages  = [...this.state.messages, serverMessage];
      this.setState({ messages: newServerMessages  }, () => console.log(this.state));
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
