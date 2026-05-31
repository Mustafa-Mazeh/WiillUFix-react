import { useEffect, useState } from 'react'
import { testimonials } from '../data/content'

function Stars() {
  return (
    <div className="d-flex justify-content-end">
      {Array.from({ length: 5 }).map((_, i) => (
        <i key={i} className="fa-solid fa-star text-secondary" />
      ))}
    </div>
  )
}

export default function TestimonialCarousel() {
  const [index, setIndex] = useState(0)
  const count = testimonials.length

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % count), 5000)
    return () => clearInterval(id)
  }, [count])

  const go = (i) => setIndex((i + count) % count)

  return (
    <div className="container-fluid testimonial overflow-hidden pb-5">
      <div className="container py-5">
        <div className="section-title text-center mb-5">
          <div className="sub-style" />
          <h1 className="display-5 mb-4">What Our Clients Say</h1>
        </div>

        <div className="tc-viewport">
          <button className="tc-nav tc-prev" onClick={() => go(index - 1)} aria-label="Previous">
            <i className="bi bi-arrow-left" />
          </button>

          <div
            className="tc-track owl-carousel testimonial-carousel"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {testimonials.map((t) => (
              <div className="tc-slide" key={t.name}>
                <div className="testimonial-item">
                  <div className="testimonial-content p-4 mb-5">
                    <p className="fs-5 mb-0">{t.text}</p>
                    <Stars />
                  </div>
                  <div className="d-flex">
                    <div className="rounded-circle me-4" style={{ width: 100, height: 100 }}>
                      <img
                        className="img-fluid rounded-circle"
                        src={`/img/${t.img}`}
                        alt={t.name}
                      />
                    </div>
                    <div className="my-auto">
                      <h5>{t.name}</h5>
                      <p className="mb-0">{t.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button className="tc-nav tc-next" onClick={() => go(index + 1)} aria-label="Next">
            <i className="bi bi-arrow-right" />
          </button>
        </div>
      </div>
    </div>
  )
}
