import EmailIcon from '@mui/icons-material/Email'
import TwitterIcon from '@mui/icons-material/Twitter'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-logo">
              <img src="/Darkthemelogo.png" alt="TheUnidentified" className="footer-logo-img" />
            </div>
            <p>Building digital experiences that matter. We help businesses grow with modern design and development.</p>
            <div className="footer-socials">
              <a href="#" aria-label="Twitter"><TwitterIcon /></a>
              <a href="#" aria-label="LinkedIn"><LinkedInIcon /></a>
              <a href="#" aria-label="GitHub"><GitHubIcon /></a>
            </div>
          </div>
          
          <div className="footer-links">
            <div className="footer-col">
              <h4>Services</h4>
              <ul>
                <li><a href="#services">UI/UX Design</a></li>
                <li><a href="#services">Web Development</a></li>
                <li><a href="#services">Mobile Apps</a></li>
                <li><a href="#services">SEO</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Company</h4>
              <ul>
                <li><a href="#about">About Us</a></li>
                <li><a href="#work">Portfolio</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#">Careers</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Newsletter</h4>
              <p>Stay updated with our latest news and offers.</p>
              <div className="newsletter">
                <input type="email" placeholder="Enter your email" />
                <button type="submit" aria-label="Subscribe">
                  <EmailIcon />
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} TheUnidentified. All rights reserved.</p>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}