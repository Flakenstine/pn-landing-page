import React, { useState } from 'react';
import logo from './images/pn-logo.png';
import logo_alt from './images/pn-full.png';
import './styles/layout.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

import '@fontsource/open-sans';
import { Button, Carousel, Nav, Navbar, NavbarBrand, NavLink } from 'react-bootstrap';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';


const App = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setActiveIndex(selectedIndex);
  }

  return (
    <div className="wrapper">
      <div className="video-background">
        <div classNam="video-wrap">
          <div id="video">
            <video id="bgvid" autoPlay loop muted playsInline>
              <source src="https://cdn.palace.network/landing-page/background-video-1.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
      <Navbar expand="lg">
        <NavbarBrand>
          <img src={logo} alt="PN Logo" />
        </NavbarBrand>
        <NavbarToggle aria-controls="basic-navbar-nav" />
        <NavbarCollapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <NavLink href="#">Community</NavLink>
            <NavLink href="#">Store</NavLink>
            <NavLink href="#">Audio Server</NavLink>
            <NavLink href="#">Support</NavLink>
          </Nav>
        </NavbarCollapse>
      </Navbar>
      <main className="content">
        <Carousel controls={false} indicators={false} activeIndex={activeIndex} onSelect={handleSelect}>
          <Carousel.Item>
            <Carousel.Caption>
              <h1>Step Into the Magic</h1>
              <h6>The Number One destination for an all inclusive <br /> Family Friendly Experience.</h6>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Carousel.Caption>
              <h1>Be Our Guest</h1>
              <h6>Experience the magic. 24/7. Non-stop.</h6>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Carousel.Caption>
              <div className="badge">
                <span className="badge badge-pill badge-primary">Popular</span>
              </div>
              <h1>Attraction Sponsorship</h1>
              <h6>Get involved with the process of recreating the Magic.</h6>
              <Button variant="primary">Learn More</Button>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <div className="server-status-card">
          <h1>Come Experience The Magic Today!</h1>
          <p><b>150 </b>Players Online</p>
          <button className="btn btn-primary">play.palace.network</button>
          <span>Palace Network supports Minecraft <b>1.12 - 1.15</b></span>
        </div>
      </main>
      <footer className="footer">
        <div className="footer-branding">
          <img src={logo_alt} alt="PN Logo full" />
        </div>
        <div className="footer-nav">
          <ul>
            <li><a href=""></a>Terms of Use</li>
            <li><a href=""></a>Privacy Policy</li>
            <li><a href=""></a>Help me</li>
            <li><a href=""></a>Join Our Team</li>
          </ul>
        </div>
        <div className="footer-nav-lower">
          <div className="footer-locale-selector">English</div>
          <div className="footer-social-links">
            <a><FontAwesomeIcon icon={faFacebookF} /></a>
            <a><FontAwesomeIcon icon={faTwitter} /></a>
            <a><FontAwesomeIcon icon={faYoutube} /></a>
            <a><FontAwesomeIcon icon={faInstagram} /></a>
          </div>
          <div className="footer-copyright">&copy; {new Date().getFullYear()} Palace Interactive, Inc.</div>
        </div>
      </footer>
    </div>

  );
}

export default App;
