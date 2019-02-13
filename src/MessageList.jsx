import React from 'react';
import Message from './Message.jsx';

export default class MessageList extends React.Component {

//this.props.userid --- is what is accessed by Message
  //naming the propertise but not naming the component

  // function message ()
  render() {

    const userthingy = this.props.username;
    console.log(`asdadfdsfasdfasfdsdfdsf ${userthingy}`);

    const displaymessages = this.props.messages.map(message => (
      <Message message={message} key={message.id} id={message.id}/>
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

