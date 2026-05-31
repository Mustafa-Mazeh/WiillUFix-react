import { Link } from 'react-router-dom'
import { applications, comingSoon } from '../data/applications'

function AppCard({ app }) {
  return (
    <div className="col-md-4 mb-5">
      <div className="app-card">
        <div className="app-img-container">
          <img src={`/img/${encodeURIComponent(app.img)}`} alt={app.name} />
        </div>
        <div className="app-content">
          <h3>{app.name}</h3>
          <p>{app.desc}</p>
          <span className="app-price">{app.price}</span>
          {app.disabled ? (
            <span className="btn-order btn-disabled">Coming Soon</span>
          ) : (
            <Link to="/contact" className="btn-order">
              Order Now
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

export default function Applications() {
  const all = [...applications, ...comingSoon]
  return (
    <>
      <section id="page-header">
        <div className="container text-center">
          <h1 className="display-3">
            <span>Software</span> Store
          </h1>
          <p>Enhance your device with premium, fully-activated professional software.</p>
        </div>
      </section>

      <div className="app-section">
        <div className="container">
          <div className="row">
            {all.map((app, i) => (
              <AppCard app={app} key={`{app.name}=>{i}`} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
