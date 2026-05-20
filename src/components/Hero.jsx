import './Hero.css'

export default function Hero({ theme }) {
  return (
    <section className="hero">
      <div className="container hero-inner">
        <div className="hero-content">
          <span className="tag">Welcome to our agency</span>
          <h1>We Build <span>Digital</span><br />Experiences</h1>
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
