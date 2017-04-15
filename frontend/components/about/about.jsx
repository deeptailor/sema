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
          <div className="about-title">
            About
          </div>
        </div>
      </div>
    )
  }
}

export default About;
