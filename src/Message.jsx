import React from 'react';

export default class Message extends React.Component {


  render() {
    console.log('---------------------------');
    // console.log(this.props)
    //console.log(this.props.content)
    console.log(this.props.message)
    //console.log(this.props.userid)
    return (
      <div className="message">
        <span className="message-username">{this.props.message.username}</span>
        <span className="message-content">{this.props.message.content}</span>
      </div>
    )
  }
}