// class NewMessageForm extends Component {
//   render() {
//   const onSubmit = evt => {
//   evt.preventDefault();
//   const messageNameInput = evt.target.elements.content;
//   this.props.addMessageName(taskMessageInput.value);
//   taskMessageInput.value = "";
//   };

//event handler is triggered by each key stroke - detect enter key. 
// when the enter is detected i call the function in the parent 
  
//   return (
//   <form onSubmit={onSubmit}>
//   <input type="text" name="taskName" placeholder="Write Task Name" />
//   <button type="submit">Add</button>
//   </form>
//   );
//   }
//   }


// handleSubmit = event => {
//   const comment = this. state.comment;
//   this.addQuote(comment);
//   this.setState({comment:''});
// }

/* <form onSubmit={onSubmit}>
<input type="text" className="chatbar-username" placeholder="Your Name" />
<input type="text" className="chatbar-message" placeholder="Type a message and hit ENTER" />
</form> */



  
import React from 'react';

//function MessageItem (props)  = {
// 
//}

// const messageItems = this.state.messages.map(message =>(
  //<MessageItem key ={message.id} message = {message}/>
//));




// const onKeyUp = evt => {
//   evt.preventDefault();
//   const messageInput = evt.target.className.chatbar-message;
//   //props.addMessage(messageInput.value);
//   //MessageInput.value = "";
// }

export default class ChatBar extends React.Component {

  handleKeyUp = event => {
    event.preventDefault();
    console.log('firing')
    //const message = this.state.message;
    if(event.key == 'Enter'){
         console.log('pressed!');
         console.log(event.target.value);
         //this.setState({ value: event.target.value })
    }
    //valid entry detection stuff
    // else if (this.onKeyUp){
    //   //onKeyUp
    // }
  };
  render() {
  return (
    <footer className="chatbar">
  
    <input className="chatbar-username" placeholder="Your Name (Optional)" onKeyUp={this.handleKeyUp} />
  <input className="chatbar-message" placeholder="Type a message and hit ENTER" onKeyUp={this.handleKeyUp}/>

    </footer>
    );
  }
}


  

