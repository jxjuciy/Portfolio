import { useEffect, useRef } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Database, X } from 'lucide-react'

export function publicAsset(path) {
  return import.meta.env.BASE_URL + path.replace(/^\/+/, '')
}

export function SectionHeading({ id, icon: Icon, label, children, description }) {
  return (
    <div className="section-heading">
      <p className="eyebrow"><Icon size={15} aria-hidden="true" /> {label}</p>
      <h2 id={id}>{children}</h2>
      {description && <p className="section-description">{description}</p>}
    </div>
  )
}

export function Reveal({ children, className }) {
  const reducedMotion = useReducedMotion()
  return (
    <motion.div
      className={className}
      initial={reducedMotion ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{ duration: reducedMotion ? 0 : 0.45, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}

export function BrandIcon({ icon, size = 20 }) {
  if (!icon) return <Database size={size} aria-hidden="true" />
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d={icon.path} />
    </svg>
  )
}

export function ExternalLink({ href, children, ...props }) {
  return <a href={href} target="_blank" rel="noopener noreferrer" {...props}>{children}</a>
}

export function Modal({ detail, onClose }) {
  const dialog = useRef(null)
  const reducedMotion = useReducedMotion()
  const isOpen = Boolean(detail)

  useEffect(() => {
    if (isOpen && !dialog.current.open) dialog.current.showModal()
    if (!isOpen && dialog.current.open) dialog.current.close()
  }, [isOpen])

  return (
    <dialog
      ref={dialog}
      className={`modal${detail?.wide ? ' modal-wide' : ''}`}
      aria-labelledby="modal-title"
      onCancel={(event) => { event.preventDefault(); onClose() }}
      onClick={(event) => { if (event.target === event.currentTarget) onClose() }}
    >
      <AnimatePresence>
        {detail && (
          <motion.div
            className="modal-panel"
            initial={reducedMotion ? false : { opacity: 0, y: 8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: reducedMotion ? 0 : 0.22 }}
          >
            <button className="icon-button modal-close" type="button" aria-label="Close dialog" onClick={onClose} autoFocus>
              <X size={22} aria-hidden="true" />
            </button>
            <h2 id="modal-title">{detail.title}</h2>
            {detail.content}
          </motion.div>
        )}
      </AnimatePresence>
    </dialog>
  )
}
