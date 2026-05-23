import { useState, useEffect } from 'react'
import './Hero.css'

const WORDS = ['Digital', 'Modern', 'Powerful', 'Creative']

export default function Hero({ theme }) {
  const [wordIndex, setWordIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const word = WORDS[wordIndex]
    let timeout

    if (!deleting && displayed.length < word.length) {
      timeout = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), 90)
    } else if (!deleting && displayed.length === word.length) {
      timeout = setTimeout(() => setDeleting(true), 1600)
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 50)
    } else if (deleting && displayed.length === 0) {
      setDeleting(false)
      setWordIndex(i => (i + 1) % WORDS.length)
    }

    return () => clearTimeout(timeout)
  }, [displayed, deleting, wordIndex])

  return (
    <section className="hero">
      <div className="container hero-inner">
        <div className="hero-content">
          <span className="tag reveal revealed">Welcome to our agency</span>
          <h1>
            We Build <span className="typewriter">{displayed}<span className="cursor">|</span></span><br />
            Experiences
          </h1>
          <p>We help businesses grow with modern design, development, and strategy.</p>
          <div className="hero-btns">
            <a href="#work" className="btn">View Our Work</a>
            <a href="#contact" className="btn outline">Contact Us</a>
          </div>
        </div>
        <div className="hero-logo">
          <img
            src={theme === 'dark' ? '/DarkLogo.jpeg' : '/LightLogo.jpeg'}
            alt="Company Logo"
            className="hero-logo-img"
          />
        </div>
      </div>
    </section>
  )
}
