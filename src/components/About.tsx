import { motion } from 'framer-motion'

const stats = [
  { label: 'DSA solved', value: '1200+', detail: 'Problems, patterns, persistence' },
  { label: 'Academic score', value: '9.07', detail: 'CGPA, built on consistency' },
  { label: 'Tech stack', value: '40+', detail: 'Tools, frameworks, experiments' },
  { label: 'Recognition', value: 'Top 100', detail: 'Among nationwide builders' },
]

export function About() {
  return (
    <section id="about" className="section-frame narrow-section intro">
      <p className="eyebrow"><span>02</span> about me</p>

      <div className="intro-grid">
        <h2>
          I don&apos;t just write code.<br /><em>I build what&apos;s next.</em>
        </h2>

        <div>
          <p className="body-copy">
            I&apos;m a Computer Science & Business Systems student with a strong interest in software development, AI/ML, data, and cloud technologies. I enjoy taking a rough idea, finding the signal inside it, and shaping it into a product people can actually use.
          </p>

          <p className="hand-note">built with intent <span>↗</span></p>
        </div>
      </div>

      <div className="stats-grid">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            className="mini-stat"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: index * 0.08 }}
          >
            <span>{stat.label}</span>
            <strong>{stat.value}</strong>
            <small>{stat.detail}</small>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
