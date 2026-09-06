import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown, ExternalLink, Search, ShieldCheck } from 'lucide-react'
import { useMemo, useState } from 'react'
import { certifications } from '../data'

const categories = ['ALL', ...Array.from(new Set(certifications.map((certificate) => certificate.category)))]
const issuers = ['ALL', ...Array.from(new Set(certifications.map((certificate) => certificate.provider)))]

export function CertificationGallery() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('ALL')
  const [issuer, setIssuer] = useState('ALL')
  const [expanded, setExpanded] = useState<string | null>(null)

  const visible = useMemo(() => certifications.filter((certificate) => {
    const haystack = `${certificate.title} ${certificate.provider} ${certificate.id ?? ''}`.toLowerCase()
    return haystack.includes(query.toLowerCase()) && (category === 'ALL' || certificate.category === category) && (issuer === 'ALL' || certificate.provider === issuer)
  }), [category, issuer, query])

  return (
    <section className="section-frame archive-section" id="certifications" aria-labelledby="certifications-title">
      <div className="section-heading">
        <div>
          <p className="eyebrow"><span>05</span> certificate archive</p>
          <h2 id="certifications-title">Certificates <em>&amp; Credentials</em></h2>
        </div>
        <p className="section-description">Verified learning, professional simulations, and technical certifications.</p>
      </div>

      <div className="credential-toolbar">
        <label className="credential-search"><Search size={16} aria-hidden="true" /><span className="sr-only">Search certificates</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search certificates, issuers, IDs..." /></label>
        <label className="credential-select"><span className="sr-only">Filter by issuer</span><select value={issuer} onChange={(event) => setIssuer(event.target.value)}><option value="ALL">All issuers</option>{issuers.slice(1).map((item) => <option key={item} value={item}>{item}</option>)}</select><ChevronDown size={14} aria-hidden="true" /></label>
      </div>
      <div className="filter-row" aria-label="Filter certificates by category">{categories.map((item) => <button type="button" className={category === item ? 'active' : ''} key={item} onClick={() => setCategory(item)}>{item}</button>)}</div>
      <p className="credential-count">Showing {visible.length} of {certifications.length} credentials</p>

      <div className="certificate-grid">
        {visible.map((certificate, index) => {
          const isExpanded = expanded === certificate.title
          const isVerified = Boolean(certificate.verifyUrl)
          return (
            <motion.article className={`certificate-card ${isExpanded ? 'is-expanded' : ''}`} key={certificate.title} layout initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .35, delay: Math.min(index * .025, .3) }}>
              <div className="certificate-card-top"><span className="certificate-mark">{String(certifications.indexOf(certificate) + 1).padStart(2, '0')}</span><span className="issuer-glyph" aria-hidden="true">{certificate.provider.slice(0, 2).toUpperCase()}</span></div>
              <div className="certificate-card-body"><p>{certificate.category}</p><h3>{certificate.title}</h3><small>{certificate.provider}</small>{isVerified && <span className="verified-badge"><ShieldCheck size={13} /> Verified credential</span>}
                <button type="button" className="credential-expand" aria-expanded={isExpanded} onClick={() => setExpanded(isExpanded ? null : certificate.title)}>{isExpanded ? 'Hide details' : certificate.verifyLabel ?? 'View Credential'}<ChevronDown size={15} /></button>
                <AnimatePresence initial={false}>{isExpanded && <motion.div className="credential-details" initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}><span>Credential ID</span><code>{certificate.id ?? 'Not available'}</code>{isVerified ? <a className="credential-link" href={certificate.verifyUrl} target="_blank" rel="noopener noreferrer">{certificate.verifyLabel ?? 'View Credential'} <ExternalLink size={14} /></a> : <span className="credential-unavailable">Verification link unavailable</span>}</motion.div>}</AnimatePresence>
              </div>
            </motion.article>
          )
        })}
      </div>
      {visible.length === 0 && <div className="credential-empty">No credentials match this search.</div>}
    </section>
  )
}
