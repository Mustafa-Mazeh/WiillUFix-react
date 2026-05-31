import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const LOGO = '/img/Screenshot_2024-06-30_133539-transformed.png'

const links = [
  { to: '/', label: 'Home' },
  { to: '/', hash: 'about', label: 'About Us' },
  { to: '/services', label: 'Our Services' },
  { to: '/applications', label: 'Applications' },
  { to: '/contact', label: 'Contact Us' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  // Toggle the "header-scrolled" class (was the jQuery scroll handler).
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll while the mobile menu is open (was body.mobile-nav-active).
  useEffect(() => {
    document.body.classList.toggle('mobile-nav-active', mobileOpen)
    return () => document.body.classList.remove('mobile-nav-active')
  }, [mobileOpen])

  const closeMobile = () => setMobileOpen(false)

  const goToAbout = (e) => {
    e.preventDefault()
    closeMobile()
    if (location.pathname === '/') {
      document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
    } else {
      navigate('/', { state: { scrollTo: 'about' } })
    }
  }

  const isActive = (l) => !l.hash && location.pathname === l.to

  const renderItems = () =>
    links.map((l) => (
      <li key={l.label} className={isActive(l) ? 'menu-active' : undefined}>
        {l.hash ? (
          <a href="/#about" onClick={goToAbout}>
            {l.label}
          </a>
        ) : (
          <Link to={l.to} onClick={closeMobile}>
            {l.label}
          </Link>
        )}
      </li>
    ))

  return (
    <>
      <div id="header" className={scrolled ? 'header-scrolled' : ''}>
        <div className="container-fluid">
          <div id="logo" className="pull-left">
            <Link to="/">
              <img src={LOGO} alt="Will U Fix logo" className="logo" height="200" />
            </Link>
          </div>

          <nav id="nav-menu-container">
            <ul className="nav-menu">{renderItems()}</ul>
          </nav>
        </div>
      </div>

      {/* Mobile navigation (was cloned by jQuery from the desktop menu). */}
      <button
        type="button"
        id="mobile-nav-toggle"
        aria-label="Toggle navigation"
        onClick={() => setMobileOpen((o) => !o)}
      >
        <i className={`fa ${mobileOpen ? 'fa-times' : 'fa-bars'}`} />
      </button>

      <nav id="mobile-nav">
        <ul>{renderItems()}</ul>
      </nav>

      {mobileOpen && (
        <div
          id="mobile-body-overly"
          style={{ display: 'block' }}
          onClick={closeMobile}
        />
      )}
    </>
  )
}
