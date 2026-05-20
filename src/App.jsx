import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import About from './components/About'
import Services from './components/Services'
import Work from './components/Work'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const [theme, setTheme] = useState('dark')

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    document.documentElement.setAttribute('data-theme', next)
  }

  return (
    <>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Hero theme={theme} />
      <Stats />
      <About />
      <Services />
      <Work />
      <Testimonials />
      <Contact />
      <Footer theme={theme} />
    </>
  )
}
