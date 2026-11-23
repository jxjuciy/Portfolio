import { ArrowUpRight, Linkedin, Mail, Phone, Send } from 'lucide-react'
import { siFacebook, siGithub, siInstagram, siTiktok } from 'simple-icons'
import { contacts } from '../data/contact.js'
import { BrandIcon, ExternalLink, Reveal, SectionHeading } from './Shared.jsx'

const brands = { github: siGithub, facebook: siFacebook, instagram: siInstagram, tiktok: siTiktok }
const icons = { linkedin: Linkedin, email: Mail, phone: Phone }

function contactHref({ id, type, label, url }) {
  const contactType = type || id
  if (contactType === 'email') return label.trim() ? 'https://mail.google.com/mail/?view=cm&fs=1&to=' + encodeURIComponent(label.trim()) : ''
  if (contactType === 'phone') return label.trim() ? 'tel:' + label.replace(/[^+\d]/g, '') : ''
  return url.trim()
}

function ContactCard({ contact, showDetail }) {
  const { id, platform, label } = contact
  const type = contact.type || id
  const Icon = icons[type]
  const href = contactHref(contact)
  const className = 'card interactive contact-card'
  const content = (
    <>
      <span className="tile-icon">{Icon ? <Icon size={20} aria-hidden="true" /> : <BrandIcon icon={brands[type]} size={20} />}</span>
      <span className="contact-copy"><strong>{platform}</strong><span>{href ? label.trim() || 'View profile' : 'Details pending'}</span></span>
      <ArrowUpRight className="expand-icon" size={17} aria-hidden="true" />
    </>
  )

  if (!href) {
    return (
      <button
        type="button"
        className={className}
        onClick={() => showDetail({ title: platform, content: <p>This contact method will be available once the details have been added.</p> })}
      >
        {content}
      </button>
    )
  }
  if (type === 'phone') return <a className={className} href={href}>{content}</a>
  return <ExternalLink className={className} href={href}>{content}</ExternalLink>
}

export function Contact({ showDetail }) {
  return (
    <section id="contact" className="section contact-section" aria-labelledby="contact-title">
      <Reveal>
        <SectionHeading
          id="contact-title"
          icon={Send}
          label="Get in Touch"
          description="I’d love to hear about internship opportunities, project collaborations, or ways we can work together."
        >
          Let’s Build Something Together.
        </SectionHeading>
        <div className="contact-grid">
          {contacts.map((contact) => <ContactCard key={contact.id} contact={contact} showDetail={showDetail} />)}
        </div>
      </Reveal>
    </section>
  )
}
