import React from 'react';
import logo from './images/pn-logo.png';
import logo_alt from './images/pn-full.png';
import './styles/layout.scss';


const App = () => {
  return (
    <div>
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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora eligendi tenetur, harum nesciunt itaque dolorem eos in deserunt, ad laudantium saepe alias est possimus sint ipsa neque corporis laboriosam deleniti!
      </main>
      <footer className="footer">
        <div className="footer-branding">
          <img src={logo_alt} />
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
            <a>Facebook</a>
            <a>Twitter</a>
            <a>Instagram</a>
            <a>Youtube</a>
          </div>
        </div>
      </footer>
    </div>

  );
}

export default App;
