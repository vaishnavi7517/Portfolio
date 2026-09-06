import { ArrowRight } from 'lucide-react'
import { projects } from '../data'
import { ProjectCard } from './ProjectCard'

export function Projects() {
  return (
    <section id="work" className="section-frame exhibition">
      <div className="section-heading">
        <div>
          <p className="eyebrow"><span>03</span> featured works</p>
          <h2>Selected <em>projects.</em></h2>
        </div>
        <span className="section-index">01 — 03 / selected work</span>
      </div>

      <div className="project-stage">
        <div className="stage-grid" aria-hidden="true" />
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>

      <p className="stage-caption">A small selection of systems, interfaces, and ideas brought to life.</p>

      <div className="section-link-row">
        <a href="#contact">Let&apos;s build <ArrowRight size={14} /></a>
      </div>
    </section>
  )
}
