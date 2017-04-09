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

  componentWillUpdate(){
    var chatBox = document.getElementById('chat-messages');
    chatBox.scrollTop = chatBox.scrollHeight;
  }

  componentDidMount(){
    socket.on('init', this._initialize);
    socket.on('send:message', this._messageReceive);
    document.addEventListener('keydown', (e) => {
      if(e.keyCode === 13){
        this.handleMessageSubmit();
      }
    });
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
      var messageObject = {user: this.state.currentUser, message: $('.chat-input').val()};
      var message = JSON.stringify(messageObject);
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
        message = JSON.parse(message);
        if(message.user === this.state.currentUser){
          return(this.renderChatBubble(this.state.currentUser, message.message, `message-${i}`, 'own-message'));
        } else if(message.user === 'SemaBot'){
          return(this.renderChatBubble('SemaBot', message.message, `bot-message-${i}`, 'bot-message'));
        } else {
          return(this.renderChatBubble(message.user, message.message, `message-${i}`));
        }
      })
    );
  }

  render(){
    return(
      <div className="chat-container">
        <ul id="chat-messages" className="chat-messages">
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
