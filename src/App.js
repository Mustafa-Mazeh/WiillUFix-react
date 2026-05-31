import ReactDOM from "react-dom/client"
import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'
import Home from './pages/Home'
import Services from './pages/Services'
import Applications from './pages/Applications'
import Contact from './pages/Contact'

// Reset scroll position on every route change (unless we're jumping to a hash).
function ScrollToTop() {
  const { pathname, state } = useLocation()
  useEffect(() => {
    if (!state?.scrollTo) window.scrollTo(0, 0)
  }, [pathname, state])
  return null
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/applications" element={<Applications />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
      <BackToTop />
    </>
  )
}
