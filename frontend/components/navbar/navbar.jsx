import React from 'react';
import { withRouter } from 'react-router'

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.goHompage = this.goHompage.bind(this);
    this.goAboutpage = this.goAboutpage.bind(this);
  }

  goHompage() {
    this.props.router.push('/');
  }

  goAboutpage() {
    this.props.router.push('about');
  }

  render() {
    return (
      <div>
        <div className="splash-header">
          <h1>sema</h1>
          <div className="splash-buttons">
            <div onClick={this.goHompage}>Home</div>
            <div onClick={this.goAboutpage}>About</div>
            <div>Contact</div>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(Navbar);
