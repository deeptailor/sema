import React from 'react';
import $ from 'jquery';

class Splash extends React.Component{
  constructor(props){
    super(props);
    this.clickEnterChat = this.clickEnterChat.bind(this);
    this.routerPush = this.routerPush.bind(this);
    this.clickEnterChat = this.clickEnterChat.bind(this);
    this.pressEnterChat = this.pressEnterChat.bind(this);
  }

  componentWillMount(){
    document.addEventListener('keydown', this.pressEnterChat);
  }

  componentWillUnmount(){
    document.removeEventListener('keydown', this.pressEnterChat);
  }

  pressEnterChat(e){
    if(e.keyCode === 13){
      this.clickEnterChat();
    }
  }

  clickEnterChat(){
    document.cookie = "";
    let nickname = $('.nickname').val();

    if(nickname === ''){
      return;
    }

    $('body').data('currentUser', nickname);
    this.routerPush('chat');
  }

  routerPush(route){
    this.props.router.push(route);
  }

  render(){
    return(
        <div className='splash-container'>
          <div className="splash-colors">
            <div className="splash-overlay">
              <div className="splash-inner-container">
                <div className="splash-header">
                  <h1>sema</h1>
                  <div className="splash-buttons">
                    <div>About</div>
                    <div>Contact</div>
                  </div>
                </div>
                <form className="splash-form">
                  <input className="nickname" type="text" placeholder="Please Enter Your Nickname"></input>
                  <div className="enter-chat-button" onClick={this.clickEnterChat}><i className="fa fa-share" aria-hidden="true"></i></div>
                </form>
              </div>
            </div>
          </div>
        </div>
    )
  }
}

export default Splash;
