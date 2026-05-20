import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
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
