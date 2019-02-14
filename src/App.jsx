import React, {Component} from 'react';
import NavBar from './NavBar.jsx';
import ChatBar from './ChatBar.jsx';
import MessageList from './MessageList.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: {name: "Anonymous"},
      messages: [],
      notification: null
    };
  }

  sendMessage = newMessage => {
    this.socketServer.send(JSON.stringify(newMessage))
  }

  addMessage = message => {
    const newMessage = {
     content: message,
     username: this.state.currentUser.name || 'anonymous' ,
     type:'incomingMessage'
     //notification: false
    }
    this.sendMessage(newMessage);
  }

  addUser = userName => {
    const dummy_notification = {oldname:this.state.currentUser.name , newname:userName, type:'postNotification', content:'orange'}
    this.sendMessage(dummy_notification);
    this.setState({ currentUser: {name: userName} }, () => console.log(this.state));
  }

  //{type: postNotification}

  //updateClientInfo = (id, username, color) = > {
  //  console.log("Client info: " )
//    this.updatUsername()

  //}

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
      // const newServerMessages  = [...this.state.messages, serverMessage];
      // this.setState({ messages: newServerMessages  }, () => console.log(this.state)

      switch(serverMessage.type) {
        case "postMessage":
        const newServerMessages  = [...this.state.messages, serverMessage];
            this.setState({ messages: newServerMessages  }, () => console.log(this.state))
          break;
        case "incomingNotification":
        //console.log('return thingy');
        const newNotificationMessages  = [...this.state.messages, serverMessage];
        this.setState({ messages: newNotificationMessages  }, () => console.log(this.state))

        //const newNotificationMessages  = [...this.state.messages, serverMessage];
        // this.setState({ notifications: newNotificationMessages  }, () => console.log(this.state))
          
          /// target will need to be different then messages. so you need to set a new state on a new object, maybe, for notifications... 
          break;
        //case "usercount":
        default:
          // show an error in the console if the message type is unknown
          console.log("Unknown event type " + data.type);
      }
    

      //);
    };
  }
  render() {
    return (
      <div>
      <NavBar />
      <MessageList messages = {this.state.messages} username = {this.state.currentUser.name}/>
      <ChatBar addMessage={this.addMessage} addUser={this.addUser}/>
      
      </div>
    );
  }
}
export default App;

// you will add a prop for color --- and maybe the style sheet choice too
