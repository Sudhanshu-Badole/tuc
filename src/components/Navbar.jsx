import { useState, useEffect } from 'react'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import './Navbar.css'

export default function Navbar({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-inner">

        <a href="#" className="logo">
          <img
            src={theme === 'dark' ? '/Darkthemelogo.jpeg' : '/Lightthemelogo.jpeg'}
            alt="TheUnidentified"
            className={`logo-icon ${theme === 'light' ? 'light' : ''}`}
          />
        </a>

        <nav className={menuOpen ? 'open' : ''}>
          {['about', 'services', 'work', 'contact'].map(link => (
            <a key={link} href={`#${link}`} onClick={() => setMenuOpen(false)}>
              {link.charAt(0).toUpperCase() + link.slice(1)}
            </a>
          ))}
        </nav>

        <div className="nav-right">
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
            {theme === 'dark' ? <LightModeIcon fontSize="small" /> : <DarkModeIcon fontSize="small" />}
          </button>
          <a href="#contact" className="btn">Get Started</a>
        </div>

        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>

      </div>
    </header>
  )
}
