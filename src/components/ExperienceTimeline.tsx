import { motion } from 'framer-motion'
import { experience } from '../data'

export function ExperienceTimeline() {
  return (
    <section className="section-frame experience-section" id="experience" aria-labelledby="experience-title">
      <div className="section-heading">
        <div><p className="eyebrow"><span>02</span> experience tower</p><h2 id="experience-title">Work in <em>motion.</em></h2></div>
        <p className="section-description">A factual timeline of roles and environments.</p>
      </div>
      <div className="experience-timeline">
        {experience.map((item, index) => (
          <motion.article className="experience-card" key={`${item.company}-${item.role}`} initial={{ opacity: 0, x: -18 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.55, delay: index * 0.06 }}>
            <span className="experience-node">0{index + 1}</span>
            <div className="experience-date">{item.date}</div>
            <div className="experience-copy"><p>{item.type}{item.location ? ` / ${item.location}` : ''}</p><h3>{item.role}</h3><strong>{item.company}</strong></div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
