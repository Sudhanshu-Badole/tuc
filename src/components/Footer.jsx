import './Footer.css'

export default function Footer({ theme }) {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-logo">
          <img
            src={theme === 'dark' ? '/Darkthemelogo.jpeg' : '/Lightthemelogo.jpeg'}
            alt="TheUnidentified"
            className="footer-logo-icon"
          />
        </div>
        <p>© {new Date().getFullYear()} TheUnidentified. All rights reserved.</p>
        <div className="socials">
          {['Twitter', 'LinkedIn', 'GitHub'].map(s => (
            <a key={s} href="#">{s}</a>
          ))}
        </div>
      </div>
    </footer>
  )
}
