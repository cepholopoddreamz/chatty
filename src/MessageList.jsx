import React from 'react';
import Message from './Message.jsx';

export default class MessageList extends React.Component {

//this.props.userid --- is what is accessed by Message
  //naming the propertise but not naming the component

  // function message ()

  render() {
    const displaymessages = this.props.messages.map(message => (
      <Message message={message}/>
    ));
    return (
    <main className="messages">
      {displaymessages}
      <div className="message system">
        Anonymous1 changed their name to nomnom.
      </div>
    </main>
    )
  }
}

