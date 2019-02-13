import React from 'react';
import Message from './Message.jsx';

export default class MessageList extends React.Component {
  render() {
    const userthingy = this.props.username;
    console.log(`asdadfdsfasdfasfdsdfdsf ${userthingy}`);
    //when the user is still anonymouse, the key doesn't work or hasn't yet been made... troubleshoot maybe. error only comes up when comment is added and new user not declared. 
    const displaymessages = this.props.messages.map(message => (
      <Message key={message.id} message={message}  id={message.id}/>
    ));
    //trying to pass another prop to messages, also produced an error
    // const displayusers = 
    // this.props.messages.map(message => (
    //   <Message message={userid} />
    // ));
    return (
    <main className="messages">
      {displaymessages}
      <div className="message system">
      </div>
    </main>
    )
  }
}
//Anonymous1 changed their name to {userthingy} 

//tried to add an additional prop for username ={userId} but it broke...

