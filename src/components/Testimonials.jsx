import StarIcon from '@mui/icons-material/Star'
import FormatQuoteIcon from '@mui/icons-material/FormatQuote'
import './Testimonials.css'

const testimonials = [
  { text: 'Amazing team! They delivered beyond our expectations. Highly recommend.', name: 'John Smith',   role: 'CEO, TechCorp' },
  { text: 'Professional, creative, and fast. Our website traffic doubled after launch.', name: 'Sarah Lee',    role: 'Founder, StartupX' },
  { text: 'Best investment we made. The design is stunning and the code is clean.', name: 'Mike Johnson', role: 'CTO, DevHub' },
]

export default function Testimonials() {
  return (
    <section className="testimonials section">
      <div className="container">
        <div className="section-head">
          <span className="tag">Testimonials</span>
          <h2>What Clients Say</h2>
        </div>
        <div className="testi-grid">
          {testimonials.map(t => (
            <div className="testi-card" key={t.name}>
              <div className="stars">
                {[...Array(5)].map((_, i) => <StarIcon key={i} fontSize="small" />)}
              </div>
              <FormatQuoteIcon className="quote-icon" />
              <p>{t.text}</p>
              <div className="testi-author">
                <div className="avatar" />
                <div>
                  <strong>{t.name}</strong>
                  <span>{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
