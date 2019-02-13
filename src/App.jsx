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
      messages: [{
        username: 'Fred Moten',
        content: "we can speculate on the relay of our common activity, make a circle round our errant roots. Dancing is what we make of falling. Music is what we make of music's absence, the real presence making music underneath. I'm exhausted so my soul is rested.",
        id: uuid.v1()
      }],
      currentUser: '' //{} // has more then that
    };
  }

  addMessage = message => {
    const newMessage = {
     content: message,
     username: this.state.currentUser
    }
    // merging my current array of quotes with new quotes
    const newMessages = [...this.state.messages, newMessage];
    console.log(newMessage);
   this.setState({ messages: newMessages }, () => console.log(this.state));
  }

  addUser = userId => {
    this.setState({ currentUser: userId }, () => console.log(this.state));
  }

 // in App.jsx
componentDidMount() {
  //const url = 'ws://localhost:3001/';
  //this.socket = new Websocket(url);
  //this.socket.onopen = event => {
    //console.log("Connected to socket server ")
    //this.socket.send(JSON.stringify({message:`hello`}))
  //}
  console.log("componentDidMount <App />");
  setTimeout(() => {
    console.log("Simulating incoming message");
    // Add a new message to the list of messages in the data store
    const newMessage = {id: 3, username: "Michelle", content: "Hello there!"};
    const messages = this.state.messages.concat(newMessage)
    // Update the state of the app component.
    // Calling setState will trigger a call to render() in App and all child components.
    this.setState({messages: messages})
  }, 3000);
}


  render() {
    return (
      <div>
      <NavBar />
      <MessageList messages = {this.state.messages} username = {this.state.currentUser} />
      <ChatBar addMessage={this.addMessage} addUser={this.addUser}/>
      </div>
    );
  }
}
export default App;

//onSubmit = {this.onSubmit}

///you need to add state - each component has a state that holdes the value  /// it was looking for a value in your class only. 