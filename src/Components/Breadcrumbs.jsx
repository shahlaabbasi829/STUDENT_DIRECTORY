import { Link } from 'react-router-dom'

export function Breadcrumbs() {
  return (
    <nav aria-label="breadcrumb" className="bg-dark">
      <ol className="breadcrumb">
        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
        <li className="breadcrumb-item"><Link to="/students">Students</Link></li>
        <li className="breadcrumb-item active" aria-current="page">Directory</li>
      </ol>
    </nav>
  )
}
