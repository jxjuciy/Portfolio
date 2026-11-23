import { ArrowDown, MapPin } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import { profile } from '../data/profile.js'
import { publicAsset } from './Shared.jsx'

function Portrait() {
  const initials = profile.name.trim().split(/\s+/).slice(0, 2).map((part) => part[0]).join('')
  return (
    <div className="portrait">
      {profile.photo ? (
        <img className="portrait-photo" src={publicAsset(profile.photo)} alt={profile.name} fetchPriority="high" />
      ) : (
        <div className="portrait-art" aria-hidden="true">
          <span className="art-orbit orbit-outer" />
          <span className="art-orbit orbit-middle" />
          <span className="art-orbit orbit-inner" />
          <span className="portrait-initials">{initials}</span>
        </div>
      )}
      <span className="portrait-corner corner-tl" />
      <span className="portrait-corner corner-tr" />
      <span className="portrait-corner corner-bl" />
      <span className="portrait-corner corner-br" />
    </div>
  )
}

export function Hero() {
  const reducedMotion = useReducedMotion()
  return (
    <section id="about" className="hero" aria-labelledby="hero-name">
      <motion.div
        className="shell hero-layout"
        initial={reducedMotion ? false : { opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: reducedMotion ? 0 : 0.55 }}
      >
        <Portrait />
        <div className="hero-copy">
          <h1 id="hero-name">HI I'M ADRIAN</h1>
          <p className="intro">{profile.about}</p>
          <div className="hero-meta">
            <span className="availability"><span aria-hidden="true" /> {profile.availability}</span>
            <span className="location"><MapPin size={16} aria-hidden="true" /> {profile.location}</span>
          </div>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">View My Projects <ArrowDown size={17} aria-hidden="true" /></a>
            <a className="button" href="#contact">Contact Me</a>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
