import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { Project } from '../data'

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article className="artifact" style={{ ['--artifact' as string]: project.color }}>
      <span className="artifact-top">
        <small>{String(index + 1).padStart(2, '0')}</small>
        <small>{project.type}</small>
      </span>

      <span className="artifact-visual">
        <span className="artifact-glyph">{project.number}</span>
        <span className="artifact-scan" />
      </span>

      <span className="artifact-info">
        <b>{project.title}</b>
        <small>{project.description}</small>
        <span className="project-tags">{project.technology.slice(0, 4).map((tag) => <i key={tag}>{tag}</i>)}</span>
      </span>

      <div className="artifact-footer">
        <Link to={`/projects/${project.slug}`} className="artifact-link artifact-spec">
          <span>view case study</span><ArrowUpRight size={14} />
        </Link>
      </div>
    </article>
  )
}
