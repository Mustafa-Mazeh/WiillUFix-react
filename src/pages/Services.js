import ReactDom from "react-dom/client"
import { Link } from 'react-router-dom'
import { services } from '../data/content'

export default function Services() {
  return (
    <div className="inner-page">
      <div className="container-xxl py-5">
        <div className="container">
          <div
            className="text-center mx-auto pb-4"
            style={{ maxWidth: 600 }}
          >
            <p className="fw-medium text-uppercase text-primary mb-2">Our Services</p>
            <h1 className="display-5 mb-4">We Provide Best Technical Support</h1>
          </div>

          <div className="row gy-5 gx-4">
            {services.map((s) => (
              <div className="col-md-6 col-lg-4" key={s.title}>
                <div className="service-item">
                  <img className="img-fluid" src={`/img/${encodeURIComponent(s.img)}`} alt={s.title} />
                  <div className="service-img">
                    <img className="img-fluid" src={`/img/${encodeURIComponent(s.img)}`} alt={s.title} />
                  </div>
                  <div className="service-detail">
                    <div className="service-title">
                      <hr className="w-25" />
                      <h3 className="mb-0">{s.title}</h3>
                      <hr className="w-25" />
                    </div>
                    <div className="service-text">
                      <p className="text-white mb-0">{s.text}</p>
                    </div>
                  </div>
                  {s.internal ? (
                    <Link className="btn btn-light" to={s.link}>
                      Request
                    </Link>
                  ) : (
                    <a className="btn btn-light" href={s.link} target="_blank" rel="noreferrer">
                      Request
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
