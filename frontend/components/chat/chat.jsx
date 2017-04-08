import React from 'react';
import $ from 'jquery';

function getCurrentUser(){
  return $('body').data('currentUser');
}
class Chat extends React.Component{
  constructor(props){
    super(props);
    this.state = {currentUser: getCurrentUser(), users: [], ownMessages: [], messages:[], text: ''};
    this._initialize = this._initialize.bind(this);
    this._messageReceive = this._messageReceive.bind(this);
    this.handleMessageSubmit = this.handleMessageSubmit.bind(this);
  }

  componentDidMount(){
    socket.on('init', this._initialize);
    socket.on('send:message', this._messageReceive);
  }

  _initialize(data) {
      var {users, name} = data;
      this.setState({users, user: name});
  }

  _messageReceive(message) {
      var {messages} = this.state;
      messages.push(message);
      this.setState({messages});
  }

  handleMessageSubmit() {
      var message = `${this.state.currentUser}: ${$('.chat-input').val()}`
      $('.chat-input').val('');
      var {messages} = this.state;
      messages.push(message);
      this.setState({messages});
      socket.emit('send:message', message);
  }

  renderChatBubble(name, message, key, className=""){
    return(
      <li key={key} className={`chat-bubble-container ${className}`}>
        <div className="chat-bubble">
          <h1>{name}</h1>
          <p>{message}</p>
        </div>
      </li>
    );
  }

  renderChatMessages(){
    return(
      this.state.messages.map((message,i) => {
        message = message.split(': ');
        if(message[0] === this.state.currentUser){
          return(this.renderChatBubble(this.state.currentUser, message[1], `message-${i}`, 'own-message'));
        } else if(message[0] === 'SemaBot'){
          return(this.renderChatBubble('SemaBot', message[1], `bot-message-${i}`, 'bot-message'));
        } else {
          return(this.renderChatBubble(message[0], message[1], `message-${i}`));
        }
      })
    );
  }

  render(){
    return(
      <div className="chat-container">
        <ul className="chat-messages">
          {this.renderChatMessages()}
        </ul>
        <div className="chat-input-container">
          <input className="chat-input" placeholder="Enter Text Here"></input>
          <div className="chat-submit" onClick={this.handleMessageSubmit}><i className="fa fa-paper-plane" aria-hidden="true"></i></div>
        </div>
      </div>
    )
  }
}

export default Chat;
