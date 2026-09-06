import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, X } from 'lucide-react'
import { useState } from 'react'
import { projects, type Project } from '../data'

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <motion.div className="project-modal-backdrop" role="presentation" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}>
      <motion.article className="project-modal" role="dialog" aria-modal="true" aria-labelledby="project-modal-title" initial={{ opacity: 0, y: 24, scale: .98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 24 }} onClick={(event) => event.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close project details"><X size={18} /></button>
        <p className="eyebrow"><span>{project.number}</span> project case study</p>
        <h3 id="project-modal-title">{project.title}</h3>
        <p className="modal-intro">{project.description}</p>
        <div className="modal-grid"><div><span>Problem</span><p>{project.problem}</p></div><div><span>Solution</span><p>{project.solution}</p></div><div><span>What I learned</span><p>{project.learned}</p></div><div><span>Status</span><p>{project.status}</p></div></div>
        <div className="modal-features"><span>Key features</span><ul>{project.features.map((feature) => <li key={feature}>{feature}</li>)}</ul></div>
        <div className="project-tags">{project.technology.map((technology) => <i key={technology}>{technology}</i>)}</div>
      </motion.article>
    </motion.div>
  )
}

export function ProjectGallery() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  return (
    <section className="section-frame project-gallery-section" id="projects" aria-labelledby="projects-title">
      <div className="section-heading"><div><p className="eyebrow"><span>03</span> project gallery</p><h2 id="projects-title">Built to be <em>explored.</em></h2></div><p className="section-description">Hover a display. Open a case study.<br />The details live inside.</p></div>
      <div className="project-gallery-grid">
        {projects.map((project, index) => (
          <motion.article className="project-display" key={project.slug} style={{ '--project-color': project.color } as React.CSSProperties} whileHover={{ y: -10 }} transition={{ duration: .35 }}>
            <div className="project-display-visual"><span className="project-glyph">{project.number}</span><span className="project-architecture" /></div>
            <div className="project-display-meta"><span>{project.type}</span><span>{String(index + 1).padStart(2, '0')} / 07</span></div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-display-footer"><div className="project-tags">{project.technology.slice(0, 3).map((technology) => <i key={technology}>{technology}</i>)}</div><button onClick={() => setSelectedProject(project)}>View case study <ArrowUpRight size={15} /></button></div>
          </motion.article>
        ))}
      </div>
      <AnimatePresence>{selectedProject ? <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} /> : null}</AnimatePresence>
    </section>
  )
}
