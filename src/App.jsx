import React, {Component} from 'react';
import NavBar from './NavBar.jsx';
import ChatBar from './ChatBar.jsx';
import MessageList from './MessageList.jsx';

class App extends Component {
  // this.setState ({}); // asnych -- and you can pass down a callback function

  //state = {
    //messages: [],
    //con
  //}

  constructor(props) {
    super(props);
    this.state = {
    //loading: true,
    messages: [],
    // do i need a userId prop too?
    currentUser: '' //{} // has more then that
    };
  }

  // componentDidMount() {
  //   // After 3 seconds, set `loading` to false in the state.
  //   setTimeout(() => {
  //     this.setState({loading: false}); // this triggers a re-render!
  //   }, 3000)
  // }



  render() {
    return (
      <div>
      <NavBar />
      <MessageList />
      <ChatBar />
      </div>
    );
  }
}
export default App;
