import React from 'react';
export default class NavBar extends React.Component {
  render() {
    return (
    <nav className="navbar">
    <a href="/" className="navbar-brand">Chatty</a>
    <span className="counter">{this.props.numberusers} users currently online</span>
    </nav>
    )
  }
};