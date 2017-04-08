import React from 'react';
import $ from 'jquery';

function getCurrentUser(){
  return $('body').data('currentUser');
}
class Chat extends React.Component{
  constructor(props){
    super(props);
    this.state = {currentUser: getCurrentUser(), users: [], messages:[], text: ''};
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

  renderChatMessages(){
    return(
      this.state.messages.map((message,i) => <li key={`message-${i}`}>{message}</li>)
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
          <div className="chat-submit" onClick={this.handleMessageSubmit}>Send</div>
        </div>
      </div>
    )
  }
}

export default Chat;
