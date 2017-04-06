import React from 'react';

class Chat extends React.Component{
  constructor(props){
    super(props);
  }

  componentWillMount(){
    
  }

  renderChatMessages(){
    return(
      <ul className="chat-messages"></ul>
    );
  }

  render(){
    return(
      <div className="chat-container">
        {this.renderChatMessages()}
        <div className="chat-input-container">
          <input className="chat-input" placeholder="Enter Text Here"></input>
          <div className="chat-submit">Send</div>
        </div>
      </div>
    )
  }
}

export default Chat;
