import React from 'react';
export default class Message extends React.Component {
  render() {
    console.log(this.props.message)
    return (
      <div>
        <span className="counter">{this.props.message.numcon}
        </span>
        <span className="message-content">{this.props.message.content}</span>
      </div>
    )
  }
}


