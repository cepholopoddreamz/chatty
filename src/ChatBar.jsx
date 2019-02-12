// class NewTaskForm extends Component {
//   render() {
//   const onSubmit = evt => {
//   evt.preventDefault();
//   const taskNameInput = evt.target.elements.taskName;
//   this.props.addTaskName(taskNameInput.value);
//   taskNameInput.value = "";
//   };
  
//   return (
//   <form onSubmit={onSubmit}>
//   <input type="text" name="taskName" placeholder="Write Task Name" />
//   <button type="submit">Add</button>
//   </form>
//   );
//   }
//   }

/* <footer class="chatbar">
  <input class="chatbar-username" placeholder="Your Name (Optional)" />
  <input class="chatbar-message" placeholder="Type a message and hit ENTER" />
</footer> */

/* <form onSubmit={onSubmit}>
  <input type="text" className="chatbar-username" placeholder="Your Name" />
  <input type="text" className="chatbar-message" placeholder="Type a message and hit ENTER" />
  </form> */
  
import React from 'react';

export default class ChatBar extends React.Component {
  render() {
    const onSubmit = evt => {
      evt.preventDefault();
      //const chatUsername = evt.target;
      //?? chatbar-username??
  };
  return (
    <footer className="chatbar">
    <form onSubmit={onSubmit}>
    <input type="text" className="chatbar-username" placeholder="Your Name" />
    <input type="text" className="chatbar-message" placeholder="Type a message and hit ENTER" />
    </form>
    </footer>
    );
  }
}


  

