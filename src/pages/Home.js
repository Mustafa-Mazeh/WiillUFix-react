import ReactDom from "react-dom/client"
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import HeroCarousel from '../components/HeroCarousel'
import TestimonialCarousel from '../components/TestimonialCarousel'

const aboutCards = [
  {
    icon: 'fa-history',
    title: 'Our Story',
    text: 'Our story start from 2 years when a laptop that contain all my important data stopped suddenly. This made me have the courage to try to fix it and it worked. This step gave a push to make me better in this field and get to know all things about laptops and pc.',
  },
  {
    icon: 'fa-bullseye',
    title: 'Our Mission',
    text: "Our mission is to make every laptop come back to it's original power and give 100% performance as it should.",
  },
  {
    icon: 'fa-eye',
    title: 'Our Vision',
    text: 'Our vision is to make every customer happy with the services that our shop serve and to give them the best quality.',
  },
]

export default function Home() {
  const location = useLocation()

  useEffect(() => {
    if (location.state?.scrollTo) {
      const el = document.getElementById(location.state.scrollTo)
      if (el) setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 100)
    }
  }, [location])

  const onSubmit = (e) => {
    e.preventDefault()
    e.target.reset()
  }

  return (
    <>
      <HeroCarousel />

      {/* About Us */}
      <div id="about">
        <div className="container-fluid">
          <div className="section-header">
            <h2>Welcome to Our Website</h2>
            <div className="row">
              <div className="col-md-12"></div>
            </div>
          </div>
          <div className="row">
            {aboutCards.map((c) => (
              <div className="col-md-4 about-col" key={c.title}>
                <div className="about-content">
                  <i className={`fa ${c.icon}`} />
                  <h2>{c.title}</h2>
                  <p>{c.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <TestimonialCarousel />

      {/* Contact */}
      <div className="contact" id="contact">
        <div className="container">
          <div className="section-header">
            <h3>Contact Us</h3>
            <p>
              Have a question about a repair, an upgrade or a software order? Send us a
              message and we will get back to you as soon as possible.
            </p>
          </div>

          <div className="row align-items-center">
            <div className="col-md-7">
              <div className="form">
                <form onSubmit={onSubmit}>
                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <input type="text" className="form-control" placeholder="Your Name" required />
                    </div>
                    <div className="form-group col-md-6">
                      <input type="email" className="form-control" placeholder="Your Email" required />
                    </div>
                  </div>
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="Subject" />
                  </div>
                  <div className="form-group">
                    <textarea className="form-control" rows="5" placeholder="Message" />
                  </div>
                  <div>
                    <button type="submit">Send Message</button>
                  </div>
                </form>
              </div>
            </div>

            <div className="col-md-5">
              <div className="contact-info">
                <img src="/img/Screenshot 2024-07-04 215035.png" alt="Map" />
                <p>
                  <i className="fa-solid fa-location-dot" />Lebanon, South, TairFilsay
                </p>
                <p>
                  <i className="fa-solid fa-envelope" />mustafamazeh300@gmail.com
                </p>
                <p>
                  <i className="fa-solid fa-phone" />+961 70334367
                </p>
                <div className="social">
                  <a
                    href="https://www.facebook.com/profile.php?id=100032116355069&mibextid=LQQJ4d"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa-brands fa-facebook" />
                  </a>
                  <a
                    href="https://www.instagram.com/mustafa_mazeh_?igsh=Y3liOWN4bmZ4OWwy&utm_source=qr"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa-brands fa-square-instagram" />
                  </a>
                  <a href="https://wa.me/96170334367" target="_blank" rel="noreferrer">
                    <i className="fa-brands fa-whatsapp" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
