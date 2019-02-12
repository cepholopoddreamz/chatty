import React from 'react';
import Message from './Message.jsx';

export default class MessageList extends React.Component {
  //prop.type   prop.content  prop.username {messages.type}
  render() {
    return (
    <main className="messages">
      <Message />
      <div className="message system">
        Anonymous1 changed their name to nomnom.
      </div>
    </main>
    )
  }
}

