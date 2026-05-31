import { useEffect, useState } from 'react'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 100)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const toTop = (e) => {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <a
      href="#"
      className="back-to-top"
      onClick={toTop}
      style={{ display: visible ? 'block' : 'none' }}
      aria-label="Back to top"
    >
      <i className="fa-solid fa-chevron-up" />
    </a>
  )
}
