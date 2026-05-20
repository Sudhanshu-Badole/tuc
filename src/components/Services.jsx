import BrushIcon from '@mui/icons-material/Brush'
import CodeIcon from '@mui/icons-material/Code'
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid'
import TrendingUpIcon from '@mui/icons-material/TrendingUp'
import SearchIcon from '@mui/icons-material/Search'
import CloudIcon from '@mui/icons-material/Cloud'
import './Services.css'

const services = [
  { icon: <BrushIcon />,        title: 'UI/UX Design',      desc: 'Beautiful, user-centered designs that convert visitors into customers.' },
  { icon: <CodeIcon />,         title: 'Web Development',   desc: 'Fast, responsive, and scalable websites built with modern technologies.' },
  { icon: <PhoneAndroidIcon />, title: 'Mobile Apps',       desc: 'Cross-platform mobile applications for iOS and Android.' },
  { icon: <TrendingUpIcon />,   title: 'Digital Marketing', desc: 'Data-driven marketing strategies to grow your online presence.' },
  { icon: <SearchIcon />,       title: 'SEO Optimization',  desc: 'Rank higher on search engines and drive organic traffic.' },
  { icon: <CloudIcon />,        title: 'Cloud Solutions',   desc: 'Scalable cloud infrastructure and deployment pipelines.' },
]

export default function Services() {
  return (
    <section className="services section" id="services">
      <div className="container">
        <div className="section-head">
          <span className="tag">What We Do</span>
          <h2>Our Services</h2>
        </div>
        <div className="services-grid">
          {services.map(s => (
            <div className="card" key={s.title}>
              <div className="card-icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
