import React from 'react';
import { withRouter } from 'react-router'

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.goHompage = this.goHompage.bind(this);
    this.goAboutPage = this.goAboutPage.bind(this);
    this.goContactPage = this.goContactPage.bind(this);
  }

  goHompage() {
    this.props.router.push('/');
  }

  goAboutPage() {
    this.props.router.push('about');
  }

  goContactPage() {
    this.props.router.push('contact');
  }

  render() {
    return (
      <div>
        <div className="splash-header">
          <h1>sema</h1>
          <div className="splash-buttons">
            <div onClick={this.goHompage}>Home</div>
            <div onClick={this.goAboutPage}>About</div>
            <div onClick={this.goContactPage}>Contact</div>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(Navbar);
