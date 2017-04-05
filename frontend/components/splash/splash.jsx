import React from 'react';
import $ from 'jquery';

class Splash extends React.Component{
  constructor(props){
    super(props);
  }

  clickEnterChat(){
    document.cookie = "";
    let nickname = $('.nickname').val();
    document.cookie = `name=${nickname}`;
  }

  render(){
    return(
      <div className='splash-container'>
        <div className="splash-overlay">
          <h1>SEMA.chat</h1>
          <form className="splash-form">
            <input className="nickname" type="text" placeholder="Please Enter Your Nickname"></input>
            <div className="enter-chat-button" onClick={this.clickEnterChat}>Enter Chat</div>
          </form>
        </div>
      </div>
    )
  }
}

export default Splash;
