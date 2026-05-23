import { useEffect, useRef, useState } from 'react'
import './Stats.css'

const stats = [
  { value: 200, suffix: '+', label: 'Projects Done' },
  { value: 50,  suffix: '+', label: 'Happy Clients' },
  { value: 10,  suffix: '+', label: 'Years Experience' },
  { value: 15,  suffix: '',  label: 'Team Members' },
]

function CountUp({ target, suffix }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true
        const steps = 50
        const duration = 1800
        let current = 0
        const timer = setInterval(() => {
          current += target / steps
          if (current >= target) { setCount(target); clearInterval(timer) }
          else setCount(Math.floor(current))
        }, duration / steps)
      }
    }, { threshold: 0.5 })
    observer.observe(el)
    return () => observer.disconnect()
  }, [target])

  return <h2 ref={ref}>{count}{suffix}</h2>
}

export default function Stats() {
  return (
    <section className="stats">
      <div className="container stats-grid">
        {stats.map((s, i) => (
          <div className={`stat reveal reveal-delay-${i + 1}`} key={s.label}>
            <CountUp target={s.value} suffix={s.suffix} />
            <p>{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
