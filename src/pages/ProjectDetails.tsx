import { Link, useParams } from 'react-router-dom'
import { projects } from '../data'

export function ProjectDetails() {
  const { projectId } = useParams()
  const project = projects.find((item) => item.slug === projectId)

  if (!project) {
    return (
      <div className="not-found-wrap">
        <h1>Project not found</h1>
        <Link to="/">Return home</Link>
      </div>
    )
  }

  return (
    <div className="project-detail-shell">
      <div className="project-card-large" style={{ ['--artifact' as string]: project.color }}>
        <span className="artifact-glyph detail-glyph">{project.number}</span>
        <div>
          <p className="eyebrow"><span>{project.number}</span> / {project.type}</p>
          <h1>{project.title}</h1>
          <p>{project.description}</p>
          <div className="tag-row">
            {project.technology.map((tech) => (
              <span key={tech}>{tech}</span>
            ))}
          </div>
          <p><strong>Problem:</strong> {project.problem}</p>
          <p><strong>Solution:</strong> {project.solution}</p>
          <p><strong>Status:</strong> {project.status}</p>
          <Link to="/" className="primary-button">Back to world</Link>
        </div>
      </div>
    </div>
  )
}
