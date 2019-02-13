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
        content: 'asdfdsafdasfdasadsfdssfd',
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
    // const newUser = {
    //   username: userId
    // }
    // merging my current array of quotes with new quotes
    // const newUsers = [...this.state.messages, newUser];
    // console.log(newUser);
    this.setState({ currentUser: userId }, () => console.log(this.state));
  }

  //if this is adding 'all the things' as a spread .... do i need a separate function? 


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