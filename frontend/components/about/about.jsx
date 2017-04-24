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
            We are two passionate software engineers who
            love to build apps in our free time. Sema is
            a public online chat room that allows users to
            talk and share information. We are currently
            improving it and adding more features such as
            private chat room, friend list and allowing pictures.
          </div>
        </div>
      </div>
    )
  }
}

export default About;
