import React from 'react';
import Navbar from '../navbar/navbar';

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="about-overlay">
        <div className="about-container">
          <Navbar/>
          <div className="about-content">
            We are two passianted software engineers who
            love to build apps in our free time. Sema is
            a public online chatroom that allows users to
            talk and share information. We are currently
            improving it to add more features such as
            creating private room, friend list and posting
            pictures.
          </div>
        </div>
      </div>
    )
  }
}

export default About;
