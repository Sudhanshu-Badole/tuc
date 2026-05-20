import './Work.css'

const projects = [
  { title: 'Project One',   category: 'Web Design',   color: '#6c63ff' },
  { title: 'Project Two',   category: 'Mobile App',   color: '#ff6584' },
  { title: 'Project Three', category: 'Branding',     color: '#43b89c' },
  { title: 'Project Four',  category: 'Development',  color: '#f7b731' },
]

export default function Work() {
  return (
    <section className="work section" id="work">
      <div className="container">
        <div className="section-head">
          <span className="tag">Portfolio</span>
          <h2>Our Recent Work</h2>
        </div>
        <div className="work-grid">
          {projects.map(p => (
            <div className="work-card" key={p.title} style={{ '--accent': p.color }}>
              <div className="work-bg" />
              <div className="work-overlay">
                <h3>{p.title}</h3>
                <span>{p.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
