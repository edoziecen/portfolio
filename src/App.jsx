import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Terminal from './components/Terminal'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  useEffect(() => {
    // Intersection Observer for scroll reveal animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    const revealElements = document.querySelectorAll('.reveal')
    revealElements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="relative">
      {/* Global background effects */}
      <div className="fixed inset-0 bg-grid-pattern bg-grid opacity-100 pointer-events-none z-0" />
      <div className="fixed inset-0 bg-circuit pointer-events-none z-0" />

      {/* Main content */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Projects />
        <Terminal />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default App
