import React, { useState } from 'react';
import logo from './images/pn-logo.png';
import logo_alt from './images/pn-full.png';
import './styles/layout.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  ButtonToggle
} from 'reactstrap';
import '@fontsource/open-sans';


const items = [
  {
    title: 'Be Our Guest',
    caption: 'Experience the magic. 24/7. Non stop.'
  },
  {
    title: 'Step into the Magic',
    caption: 'The number one destination for an all-inclusive family friendly experience.'
  },
  {
    title: 'We are Palace Network',
    caption: 'We love to create family friendly experiences in Minecraft.'
  }
];


const App = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }


  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} />
        <CarouselCaption captionText={item.caption} captionHeader={item.title} />
      </CarouselItem>
    );
  });

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
      <header className="header">
        <div className="header-branding">
          <img src={logo} alt="PN Logo" />
        </div>
        <nav className="header-navigation">
          <ul>
            <li><a href="">Community</a></li>
            <li><a href="">Store</a></li>
            <li><a href="">Audio Server</a></li>
            <li><a href="">Support</a></li>
          </ul>
        </nav>
      </header>
      <main className="content">
        <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
      >
            {slides}
      </Carousel>
      <div className="server-status-card">
        <h1>Come experience the magic today</h1>
        <p><b>150</b> players online</p>
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
