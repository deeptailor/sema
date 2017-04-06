import React from 'react';
import $ from 'jquery';

class Splash extends React.Component{
  constructor(props){
    super(props);
    this.clickEnterChat = this.clickEnterChat.bind(this);
    this.routerPush = this.routerPush.bind(this);
  }

  clickEnterChat(){
    document.cookie = "";
    let nickname = $('.nickname').val();
    document.cookie = `name=${nickname}`;
    this.routerPush('chat');
  }

  routerPush(route){
    this.props.router.push(route);
  }

  render(){
    return(
      <div className="splash-outer-container">
        <div className='splash-container'>
          <div className="splash-overlay">
            <h1>SEMA.chat</h1>
            <form className="splash-form">
              <input className="nickname" type="text" placeholder="Please Enter Your Nickname"></input>
              <div className="enter-chat-button" onClick={this.clickEnterChat}>Enter Chat</div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Splash;
