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
    const userId = event.target.value;
    this.props.addUser(userId); //message 
  };

// onSubmit = (e) =>{
// e.preventDefault()
// this.setState({
//   name.this.state.chatbar-username,
//   message:this.state.chatbar-message,
// })
//}




  render() {
  return (
    <footer className="chatbar">
    <input className="chatbar-username" placeholder="Your Name (Optional)" defaultValue='' onKeyUp={this.handleUser} />
     <input className="chatbar-message" placeholder="Type a message and hit ENTER" onKeyUp={this.handleMessage}/>

    </footer>
    );
  }
}


  

