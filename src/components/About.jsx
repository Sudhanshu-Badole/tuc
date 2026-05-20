import './About.css'

export default function About() {
  return (
    <section className="about section" id="about">
      <div className="container about-grid">
        <div className="about-img" />
        <div className="about-text">
          <span className="tag">About Us</span>
          <h2>Who We Are</h2>
          <p>We are a creative agency focused on delivering high-quality digital solutions. Our team combines design, technology, and strategy to help brands stand out in the digital world.</p>
          <p>Founded in 2015, we've worked with startups and enterprises across the globe to craft meaningful digital experiences.</p>
          <a href="#contact" className="btn">Work With Us</a>
        </div>
      </div>
    </section>
  )
}
