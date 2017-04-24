import React from 'react';
import Navbar from '../navbar/navbar';

class Contact extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="contact-overlay">
        <div className="contact-container">
          <Navbar/>
          <div className="two-contacts">
            <div className="contact-box">
              <img className="contact-pic" src="https://res.cloudinary.com/deeptailor/image/upload/v1479696746/photo_transparent_o7nv36.png"></img>
              <h1 className="contact-title">Deep Tailor</h1>
              <div className="contact-content" ><i className="fa fa-mobile" aria-hidden="true"></i>(708)369-6934</div>
              <ul className="contact-links">
                <li><a href="mailto:deeptailor@gmail.com"><i className="fa fa-envelope" aria-hidden="true"></i></a></li>
                <li><a href="http://deeptailor.com" target="_blank"><i className="fa fa-address-card" aria-hidden="true"></i></a></li>
                <li><a href="https://www.github.com/dtailor90" target="_blank"><i className="fa fa-github" aria-hidden="true"></i></a></li>
                <li><a href="https://www.linkedin.com/in/deeptailor" target="_blank"><i className="fa fa-linkedin-square" aria-hidden="true"></i></a></li>
              </ul>
            </div>
            <div className="contact-box">
              <img className="contact-pic" src="http://res.cloudinary.com/corgi1989/image/upload/v1481740853/henry-photo-2_klryvn.png"></img>
              <h1 className="contact-title">Henry Hsu</h1>
              <div className="contact-content" ><i className="fa fa-mobile" aria-hidden="true"></i>(415)580-8722</div>
              <ul className="contact-links">
                <li><a href="mailto:hhsu0219@gmail.com"><i className="fa fa-envelope" aria-hidden="true"></i></a></li>
                <li><a href="http://henryhsu.life" target="_blank"><i className="fa fa-address-card" aria-hidden="true"></i></a></li>
                <li><a href="https://github.com/kobe1104" target="_blank"><i className="fa fa-github" aria-hidden="true"></i></a></li>
                <li><a href="https://www.linkedin.com/in/henry-hsu-58073189/" target="_blank"><i className="fa fa-linkedin-square" aria-hidden="true"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Contact;
