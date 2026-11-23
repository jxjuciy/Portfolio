import { Award, ChevronRight, Layers3 } from 'lucide-react'
import { certificates } from '../data/certificates.js'
import { skills } from '../data/skills.js'
import { BrandIcon, ExternalLink, Reveal, SectionHeading } from './Shared.jsx'

export function Skills({ showDetail }) {
  function skillGroup(duplicate) {
    return (
      <ul className="skill-group" aria-hidden={duplicate || undefined}>
        {skills.map((skill) => (
          <li key={skill.name}>
            <button
              type="button"
              className="skill-pill interactive"
              tabIndex={duplicate ? -1 : undefined}
              onMouseDown={duplicate ? (event) => event.preventDefault() : undefined}
              onClick={() => showDetail({ title: skill.name, content: <p>{skill.category}</p> })}
            >
              <BrandIcon icon={skill.icon} size={17} /> {skill.name}
            </button>
          </li>
        ))}
      </ul>
    )
  }

  function showCertificates() {
    showDetail({
      title: 'Certificates',
      content: certificates.length ? (
        <ul className="credential-list">
          {certificates.map(({ title, issuer, credentialUrl }) => (
            <li key={title + issuer}>
              <strong>{title}</strong>
              <span>{issuer}</span>
              {credentialUrl && <ExternalLink href={credentialUrl}>View Credential</ExternalLink>}
            </li>
          ))}
        </ul>
      ) : <p>Still collecting certificates. Check back soon!</p>,
    })
  }

  return (
    <section id="skills" className="section" aria-labelledby="skills-title">
      <Reveal>
        <SectionHeading id="skills-title" icon={Layers3} label="Tools & Credentials">Skills & Certificates</SectionHeading>
        <div className="skills-layout">
          <div className="card skills-card">
            <div className="skills-header">
              <h3>Technical Skills</h3>
            </div>
            <div className="marquee">
              <div className="marquee-track">
                {skillGroup(false)}
                {skillGroup(true)}
              </div>
            </div>
          </div>
          <button type="button" className="card interactive certificate-card" onClick={showCertificates}>
            <span className="tile-icon"><Award size={23} aria-hidden="true" /></span>
            <span className="certificate-copy"><strong>Certificates</strong><span>View credentials</span></span>
            <ChevronRight className="expand-icon" size={19} aria-hidden="true" />
          </button>
        </div>
      </Reveal>
    </section>
  )
}
