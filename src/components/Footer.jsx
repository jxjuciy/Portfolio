import { ArrowUp, CodeXml } from 'lucide-react'
import { profile } from '../data/profile.js'

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-layout">
        <a className="brand" href="#home"><span className="brand-icon"><CodeXml size={18} aria-hidden="true" /></span>{profile.name}</a>
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <a className="back-to-top" href="#home">Back to top <ArrowUp size={15} aria-hidden="true" /></a>
      </div>
    </footer>
  )
}
