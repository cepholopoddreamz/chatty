



  
import React from 'react';

export default class ChatBar extends React.Component {

  handleMessage = event => {
    event.preventDefault();
    console.log('firing')
    //const message = this.state.message;
    if(event.key == 'Enter'){
      console.log('namefire!');
      console.log(event.target.value);
      //this.setState({ value: event.target.value })
      const message = event.target.value;
    this.props.addMessage(message); //message
    //this.setState({ message: event.target.value });
    //this.target.value = event.target.value;
    }
  };

  handleUser = event => {
    event.preventDefault();
    console.log(event.target.value);
    if(event.key == 'Enter'){
    const userName= event.target.value;
    this.props.addUser(userName); //message 
    }
  };

  render() {
  return (
    <footer className="chatbar">
    <input className="chatbar-username" placeholder="Your Name (Optional)" defaultValue='' onKeyUp={this.handleUser} />
     <input className="chatbar-message" placeholder="Type a message and hit ENTER" onKeyUp={this.handleMessage}/>

    </footer>
    );
  }
}


  

