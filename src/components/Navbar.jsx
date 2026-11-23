import { useEffect, useState } from 'react'
import { CodeXml, Menu, X } from 'lucide-react'
import { profile } from '../data/profile.js'

const links = [
  ['about', 'About Me'],
  ['projects', 'Projects'],
  ['contact', 'Contact'],
]

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState(() => window.location.hash.slice(1) || 'about')

  useEffect(() => {
    let frame = 0
    function updateActive() {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        if (window.scrollY < 3) {
          setActive('about')
          return
        }
        const marker = Math.min(150, window.innerHeight * 0.25)
        const current = links.findLast(([id]) => document.getElementById(id)?.getBoundingClientRect().top <= marker)
        const atBottom = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 4
        setActive(atBottom ? 'contact' : current?.[0] || 'about')
      })
    }
    window.addEventListener('scroll', updateActive, { passive: true })
    window.addEventListener('resize', updateActive)
    updateActive()
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', updateActive)
      window.removeEventListener('resize', updateActive)
    }
  }, [])

  function select(id) {
    setMenuOpen(false)
    setActive(id)
  }

  return (
    <header className="site-header">
      <div className="shell nav-layout">
        <a href="#about" className="brand" onClick={() => select('about')}>
          <span className="brand-icon"><CodeXml size={20} aria-hidden="true" /></span>
          <span>{profile.name}</span>
        </a>
        <button
          className="icon-button nav-toggle"
          type="button"
          aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
          aria-controls="site-nav"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
        <nav
          id="site-nav"
          aria-label="Main navigation"
          className={menuOpen ? 'nav-links is-open' : 'nav-links'}
          onKeyDown={(event) => {
            if (event.key === 'Escape' && menuOpen) {
              setMenuOpen(false)
              document.querySelector('.nav-toggle').focus()
            }
          }}
        >
          {links.map(([id, label]) => (
            <a key={id} href={'#' + id} aria-current={active === id ? 'location' : undefined} onClick={() => select(id)}>
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
