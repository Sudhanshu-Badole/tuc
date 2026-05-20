import './Stats.css'

const stats = [
  { value: '200+', label: 'Projects Done' },
  { value: '50+',  label: 'Happy Clients' },
  { value: '10+',  label: 'Years Experience' },
  { value: '15',   label: 'Team Members' },
]

export default function Stats() {
  return (
    <section className="stats">
      <div className="container stats-grid">
        {stats.map(s => (
          <div className="stat" key={s.label}>
            <h2>{s.value}</h2>
            <p>{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
