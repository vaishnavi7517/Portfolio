import { Link } from 'react-router-dom'

export function NotFound() {
  return (
    <div className="not-found-wrap">
      <h1>404</h1>
      <p>This world does not exist yet.</p>
      <Link to="/">Return to the main world</Link>
    </div>
  )
}
