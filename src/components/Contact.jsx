import { useState } from 'react'
import EmailIcon from '@mui/icons-material/Email'
import PhoneIcon from '@mui/icons-material/Phone'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import SendIcon from '@mui/icons-material/Send'
import './Contact.css'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = e => {
    e.preventDefault()
    setSent(true)
    setForm({ name: '', email: '', subject: '', message: '' })
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <section className="contact section" id="contact">
      <div className="container contact-grid">
        <div className="contact-info">
          <span className="tag">Get In Touch</span>
          <h2>Let's Work Together</h2>
          <p>Have a project in mind? We'd love to hear about it. Send us a message and we'll get back to you within 24 hours.</p>
          <ul>
            <li><EmailIcon fontSize="small" /> hello@company.com</li>
            <li><PhoneIcon fontSize="small" /> +1 (555) 000-0000</li>
            <li><LocationOnIcon fontSize="small" /> 123 Street, City, Country</li>
          </ul>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          {sent && (
            <div className="success-msg">
              <CheckCircleIcon fontSize="small" /> Message sent! We'll be in touch soon.
            </div>
          )}
          <div className="form-row">
            <input name="name"    value={form.name}    onChange={handleChange} placeholder="Your Name"  required />
            <input name="email"   value={form.email}   onChange={handleChange} placeholder="Your Email" type="email" required />
          </div>
          <input name="subject" value={form.subject} onChange={handleChange} placeholder="Subject" required />
          <textarea name="message" value={form.message} onChange={handleChange} placeholder="Your Message" rows={5} required />
          <button type="submit" className="btn">
            Send Message <SendIcon fontSize="small" style={{ marginLeft: 8, verticalAlign: 'middle' }} />
          </button>
        </form>
      </div>
    </section>
  )
}
