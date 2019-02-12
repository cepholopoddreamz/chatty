import React, {Component} from 'react';
import NavBar from './NavBar.jsx';
import ChatBar from './ChatBar.jsx';
import MessageList from './MessageList.jsx';

class App extends Component {
//function that passes the values entered in the input box
  constructor(props) {
    super(props);
    this.state = {
    //loading: true,
    messages: [],
    currentUser: '' //{} // has more then that
    };
  }

  addMessage = message => {
    const newMessage = {
      text: message
      //messages: [],
    }
    // merging my current array of quotes with new quotes
    const newMessages = [...this.state.messages, newMessage];
    console.log(newMessage);

    // this.setState({ messages: newMessages }, () => console.log(this.state));
  }

  addUser = userId => {
    const newUser = {
      username: userId,
      //messages: [],
    }
    // merging my current array of quotes with new quotes
    const newUsers = [...this.state.currentUser, newUser];
    console.log(newUser);

    // this.setState({ messages: newMessages }, () => console.log(this.state));
  }



  render() {
    return (
      <div>
      <NavBar />
      <MessageList />
      <ChatBar addMessage={this.addMessage} addUser={this.addUser}/>
      </div>
    );
  }
}
export default App;
