import { BriefcaseBusiness, ChevronDown, GraduationCap } from 'lucide-react'
import { education } from '../data/education.js'
import { experience } from '../data/experience.js'
import { Reveal, SectionHeading } from './Shared.jsx'

export function Education() {
  return (
    <section id="education" className="section" aria-labelledby="education-title">
      <Reveal>
        <SectionHeading id="education-title" icon={GraduationCap} label="Academic Background">Education</SectionHeading>
        <div className="education-grid">
          {education.map(({ id, school, program, period, note }) => (
            <details className="card interactive history-card" key={id}>
              <summary>
                <span className="tile-icon"><GraduationCap size={21} aria-hidden="true" /></span>
                <span className="history-summary"><span className="history-title">{school}</span><span className="history-secondary">{program}</span></span>
                <ChevronDown className="expand-icon" size={18} aria-hidden="true" />
              </summary>
              <div className="history-details"><span>{period}</span>{note && <span className="tag">{note}</span>}</div>
            </details>
          ))}
        </div>
      </Reveal>
    </section>
  )
}

export function Experience() {
  return (
    <section id="experience" className="section" aria-labelledby="experience-title">
      <Reveal>
        <SectionHeading id="experience-title" icon={BriefcaseBusiness} label="Freelance Work">Experience</SectionHeading>
        <div className="experience-list">
          {experience.map(({ id, title, company, period, responsibilities, skills, placeholder }) => (
            <details className="card interactive history-card" key={id}>
              <summary>
                <span className="tile-icon"><BriefcaseBusiness size={21} aria-hidden="true" /></span>
                <span className="history-summary"><span className="history-title">{title}</span><span className="history-secondary">{company}</span></span>
                <span className="experience-period">{period}</span>
                <ChevronDown className="expand-icon" size={18} aria-hidden="true" />
              </summary>
              <div className="experience-details">
                <p className="mobile-period">{period}</p>
                {placeholder ? (
                  <p>Experience placeholder. Add your responsibilities and relevant skills when you update this entry.</p>
                ) : (
                  <>
                    {responsibilities.length > 0 && <ul>{responsibilities.map((item) => <li key={item}>{item}</li>)}</ul>}
                    {skills.length > 0 && <div className="tags">{skills.map((skill) => <span className="tag" key={skill}>{skill}</span>)}</div>}
                  </>
                )}
              </div>
            </details>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
