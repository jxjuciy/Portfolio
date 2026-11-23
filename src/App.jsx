import { useEffect, useState } from 'react'
import { Navbar } from './components/Navbar.jsx'
import { Hero } from './components/Hero.jsx'
import { Education, Experience } from './components/History.jsx'
import { Skills } from './components/Skills.jsx'
import { Projects } from './components/Projects.jsx'
import { Contact } from './components/Contact.jsx'
import { Footer } from './components/Footer.jsx'
import { Modal } from './components/Shared.jsx'

export function App() {
  const [detail, setDetail] = useState(null)

  useEffect(() => {
    const id = window.location.hash.slice(1)
    document.getElementById(id)?.scrollIntoView({ behavior: 'instant' })
  }, [])

  return (
    <div id="home">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <div className="shell content-sections">
          <Education />
          <Experience />
          <Skills showDetail={setDetail} />
          <Projects showDetail={setDetail} />
          <Contact showDetail={setDetail} />
        </div>
      </main>
      <Footer />
      <Modal detail={detail} onClose={() => setDetail(null)} />
    </div>
  )
}
