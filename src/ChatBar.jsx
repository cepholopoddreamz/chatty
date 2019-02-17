import React from 'react';
export default class ChatBar extends React.Component {
  handleMessage = event => {
    event.preventDefault();
    if(event.key == 'Enter'){
    const message = event.target.value;
    this.props.addMessage(message); //this was passed down from the app.js hence props.addmessage
    }
  };
  //apparently i can't attach this to a tab key because of dom security issues... but that would make more sense for traversing the two input boxes
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


  

