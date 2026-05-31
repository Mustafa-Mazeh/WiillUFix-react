import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { heroSlides } from '../data/content'

export default function HeroCarousel() {
  const [index, setIndex] = useState(0)
  const navigate = useNavigate()
  const count = heroSlides.length

  const go = (i) => setIndex((i + count) % count)

  // Autoplay (was data-ride="carousel").
  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % count), 5000)
    return () => clearInterval(id)
  }, [count])

  return (
    <div id="header-carousel">
      <div className="header-carousel-container">
        <div id="headerCarousel" className="carousel slide carousel-fade">
          <ul className="carousel-indicators">
            {heroSlides.map((_, i) => (
              <li
                key={i}
                className={i === index ? 'active' : ''}
                onClick={() => go(i)}
              />
            ))}
          </ul>

          <div className="carousel-inner">
            {heroSlides.map((slide, i) => (
              <div
                key={slide.title}
                className={`carousel-item${i === index ? ' active' : ''}`}
                style={{ backgroundImage: `url(/img/${encodeURIComponent(slide.img)})` }}
              >
                <div className="carousel-container">
                  <div className="carousel-content">
                    <h2>{slide.title}</h2>
                    <p>{slide.text}</p>
                    <button
                      className="btn-get-started scrollto"
                      onClick={() => navigate(slide.to)}
                    >
                      {slide.cta}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <a
            className="carousel-control-prev"
            role="button"
            onClick={(e) => {
              e.preventDefault()
              go(index - 1)
            }}
          >
            <span className="carousel-control-prev-icon fa-solid fa-chevron-left" aria-hidden="true" />
          </a>
          <a
            className="carousel-control-next"
            role="button"
            onClick={(e) => {
              e.preventDefault()
              go(index + 1)
            }}
          >
            <span className="carousel-control-next-icon fa-solid fa-chevron-right" aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>
  )
}
