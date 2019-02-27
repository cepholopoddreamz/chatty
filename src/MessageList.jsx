import React from 'react';
import Message from './Message.jsx';

export default class MessageList extends React.Component {
  render() {
   //this is two different ways to approach adding the different messages. I could also create a separate notifcation.jsx file and import like i have for the <Message /> but this other approach keeps me from creating another file
    const displaymessages = this.props.messages.map(message => (
      message.type === "incomingNotification" ?
         (<div className="notification" key={message.id}>
            <span className="notification-content">{message.content}</span>
          </div>  
        )
        : 
        <Message id={message.id} key={message.id} message={message} />
        ))
    return (
    <main className="messages">
      {displaymessages}
    </main>
    )
  }
};


