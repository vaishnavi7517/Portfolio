import { ArrowDown, Crosshair, MapPin } from 'lucide-react'
import { motion } from 'framer-motion'

const destinations = [
  { number: '01', label: 'About', copy: 'The builder behind the interface.', href: '#about', tone: 'cyan' },
  { number: '02', label: 'Experience', copy: 'Roles, seasons, and practical work.', href: '#experience', tone: 'violet' },
  { number: '03', label: 'Projects', copy: 'Systems turned into tangible things.', href: '#projects', tone: 'gold' },
  { number: '04', label: 'Skills', copy: 'A constellation of tools and ideas.', href: '#skills', tone: 'mint' },
  { number: '05', label: 'Archive', copy: 'Certificates and learning signals.', href: '#certifications', tone: 'pink' },
  { number: '06', label: 'Contact', copy: 'A terminal for the next problem.', href: '#contact', tone: 'blue' },
]

export function InteractiveWorld() {
  return (
    <section className="world-map section-frame" id="world-map" aria-labelledby="world-map-title">
      <div className="world-map-heading">
        <div>
          <p className="eyebrow"><span>00</span> personal operating system</p>
          <h2 id="world-map-title">Choose a <em>destination.</em></h2>
        </div>
        <p className="section-description">Move through the world at your own pace.<br />Every room reveals another part of the work.</p>
      </div>
      <div className="world-map-grid">
        {destinations.map((destination, index) => (
          <motion.a
            href={destination.href}
            className={`destination-card destination-${destination.tone}`}
            key={destination.label}
            whileHover={{ y: -8, rotateX: 2, rotateY: index % 2 ? -2 : 2 }}
            transition={{ duration: 0.35 }}
          >
            <span className="destination-number">{destination.number}</span>
            <MapPin size={16} aria-hidden="true" />
            <strong>{destination.label}</strong>
            <small>{destination.copy}</small>
            <ArrowDown size={15} aria-hidden="true" />
          </motion.a>
        ))}
      </div>
      <div className="world-map-note"><Crosshair size={15} /> interactive map / hover to inspect</div>
    </section>
  )
}
