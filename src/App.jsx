import React, {Component} from 'react';
import NavBar from './NavBar.jsx';
import ChatBar from './ChatBar.jsx';
import MessageList from './MessageList.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    //loading: true,
      messages: [{
        username: 'Fred Moten',
        content: 'asdfdsafdasfdasadsfdssfd'
      }],
      currentUser: '' //{} // has more then that
    };
  }

  addMessage = message => {
    const newMessage = {
     content: message
    }
    // merging my current array of quotes with new quotes
    const newMessages = [...this.state.messages, newMessage];
    console.log(newMessage);
   this.setState({ messages: newMessages }, () => console.log(this.state));
  }

  addUser = userId => {
    const newUser = {
      username: userId,
    }
    // merging my current array of quotes with new quotes
    const newUsers = [...this.state.currentUser, newUser];
    console.log(newUser);
    // this.setState({ messages: newMessages }, () => console.log(this.state));
  }

  

  // newMessages = messages => {
  //   console.log(messages)
  // }

  render() {
    return (
      <div>
      <NavBar />
      <MessageList messages = {this.state.messages}/>
      <ChatBar addMessage={this.addMessage} addUser={this.addUser}/>
      </div>
    );
  }
}
export default App;

//onSubmit = {this.onSubmit}

///you need to add state - each component has a state that holdes the value  /// it was looking for a value in your class only. 