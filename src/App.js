import React, { useEffect, useState } from 'react';
import logo from './images/pn-logo.png';
import logo_alt from './images/pn-full.png';
import './styles/layout.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faTwitch, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

import '@fontsource/open-sans';
import { Button, Carousel, Col, Container, Nav, Navbar, NavbarBrand, NavLink, OverlayTrigger, Row, Tooltip} from 'react-bootstrap';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import { faClone } from '@fortawesome/free-regular-svg-icons';
import axios from 'axios';
import { faInfoCircle } from '@fortawesome/pro-duotone-svg-icons';
import InfoModal from './components/InfoModal';

const NavLinks = [
  {
    href: "https://forums.palace.network",
    linkName: "Community"
  },
  {
    href: "https://store.palace.network",
    linkName: "Store"
  },
  {
    href: "https://audio.palace.network",
    linkName: "Audio Server"
  },
  {
    href: "https://forums.palace.network/forum/60-help-center/",
    linkName: "Support"
  },
]

const FooterLinks = [
  {
    href: "https://forums.palace.network/topic/63-forum-rules-regulations",
    linkName: "Terms of Use"
  },
  {
    href: "https://forums.palace.network/privacy/",
    linkName: "Privacy Policy"
  },
  {
    href: "https://forums.palace.network/forum/60-help-center/",
    linkName: "Help Me"
  },
  {
    href: "https://forums.palace.network/application/",
    linkName: "Join Our Team"
  },
]

const App = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [response, setResponse] = useState({ data: []});
  const [copiedText, setCopiedText] = useState(false);
  const timeoutRef = React.useRef(null);
  const [modalShow, setModalShow] = useState(false);

  const handleSelect = (selectedIndex, e) => {
    setActiveIndex(selectedIndex);
  }

  const copyToClipBoard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedText(true);
    } catch (err) {
      setCopiedText(false);
    }
  }

  useEffect(() => {
    const apiHeaders = {
      headers: { 'service-api-key': 'CtKzrnLfhjGgwlwLd7Nqp2fx3KneSUQo'}
    }
    async function fetchData () {
      const result = await axios.get('https://internal-api.palace.network/minecraft/server/online', apiHeaders);
      setResponse(result);
    }
    fetchData();
  }, [])

  useEffect(() => {
    if (timeoutRef.current !== null) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      timeoutRef.current = null;
      setCopiedText(false);
    }, 800);
  }, [copiedText])

  const NavItems = NavLinks.map((link) => <NavLink key={link.linkName} href={link.href}>{link.linkName}</NavLink>)

  const FooterNavItems = FooterLinks.map((link) => <li key={link.linkName}><a href={link.href}>{link.linkName}</a></li>)

  return (
    <div className="wrapper">
      <video autoPlay loop muted playsInline>
        <source src="https://cdn.palace.network/landing-page/background-video-1.mp4" type="video/mp4" />
      </video>
      <Container fluid>
        <Navbar expand="lg">
          <NavbarBrand>
            <img src={logo} href="#" alt="PN Logo" />
          </NavbarBrand>
          <NavbarToggle aria-controls="basic-navbar-nav" />
          <NavbarCollapse id="basic-navbar-nav">
            <Nav className="ms-auto">{NavItems}</Nav>
          </NavbarCollapse>
        </Navbar>
      </Container>
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
                <span className="badge rounded-pill bg-primary">Popular</span>
              </div>
              <h1>Attraction Sponsorship</h1>
              <h6>Get involved with the process of recreating the Magic.</h6>
              <Button variant="primary" href="https://forums.palace.network/topic/6644-introducing-attraction-sponsorships-sponsor-tiers/">Learn More</Button>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <div className="server-status-card">
          <div className="server-status-card-col-left">
            <h1>Come Experience The Magic Today</h1>
            <h6><b>{(response.data.players > 0) ? response.data.players : 0}</b> Players Online</h6>
            <p onClick={() => setModalShow(true)}><FontAwesomeIcon icon={faInfoCircle}></FontAwesomeIcon> Palace Network supports Minecraft <b>1.12 - 1.15</b></p>
          </div>
          {/* More info Modal */}
          <InfoModal show={modalShow} onHide={() => setModalShow(false)} />
          <div className="server-status-card-col-right ms-auto">

            <OverlayTrigger key='top' placement='top' overlay={
              <Tooltip id='tooltip-top'>
                Click to copy IP
              </Tooltip>
            }>
              <button className="btn btn-primary" onClick={() => copyToClipBoard('play.palace.network')} ><span><FontAwesomeIcon icon={faClone} /></span> {copiedText ? 'Copied to clipboard' : 'play.palace.network'}</button>
            </OverlayTrigger>
          </div>
        </div>
      </main>
      <Container className="footer" fluid>
        <Row>
          <Col className="footer-branding">
            <img src={logo_alt} href="#" alt="PN Logo Full" />
          </Col>
        </Row>
        <Row>
          <Col className="footer-links">
            <ul>{FooterNavItems}</ul>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="footer-locale-selector">English</div>
          </Col>
          <Col>
            <div className="footer-social-links">
              <a href="https://twitch.tv/palacenetwork"><FontAwesomeIcon icon={faTwitch} /></a>
              <a href="https://twitter.com/palacenetwork/"><FontAwesomeIcon icon={faTwitter} /></a>
              <a href="https://www.youtube.com/channel/UCaOrLxRoCvv-DWfLa0poVFQ"><FontAwesomeIcon icon={faYoutube} /></a>
              <a href="https://palnet.us/Discord"><FontAwesomeIcon icon={faDiscord} /></a>
            </div>
          </Col>
          <Col>
            <div className="footer-copyright">
              &copy; {new Date().getFullYear()} Palace Interactive, Inc.
            </div>
          </Col>
        </Row>
      </Container>
      {/* <footer className="footer">
        <div className="footer-branding">
          <img src={logo_alt} href="#" alt="PN Logo full" />
        </div>
        <div className="footer-nav">
          <ul>{FooterNavItems}</ul>
        </div>
        <div className="footer-nav-lower">
          <div className="nav-section">English</div>
          <div className="nav-section footer-social-links">
            <a href="https://twitch.tv/palacenetwork"><FontAwesomeIcon icon={faTwitch} /></a>
            <a href="https://twitter.com/palacenetwork/"><FontAwesomeIcon icon={faTwitter} /></a>
            <a href="https://www.youtube.com/channel/UCaOrLxRoCvv-DWfLa0poVFQ"><FontAwesomeIcon icon={faYoutube} /></a>
            <a href="https://palnet.us/Discord"><FontAwesomeIcon icon={faDiscord} /></a>
          </div>
          <div className="nav-section footer-copyright">&copy; {new Date().getFullYear()} Palace Interactive, Inc.</div>
        </div>
      </footer> */}
    </div>

  );
}

export default App;
