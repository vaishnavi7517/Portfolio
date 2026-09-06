import { ArrowUpRight, Menu, X } from 'lucide-react'
import { useState } from 'react'

const navItems = [
  { label: 'home', href: '#home' },
  { label: 'about', href: '#about' },
  { label: 'experience', href: '#experience' },
  { label: 'projects', href: '#projects' },
  { label: 'skills', href: '#skills' },
  { label: 'certifications', href: '#certifications' },
  { label: 'contact', href: '#contact' },
]

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="nav-shell">
      <button className="brand" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Back to top">
        <span className="brand-mark">V</span>
        <span>VAISHNAVI / VP</span>
      </button>

      <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
        {navItems.map((item) => (
          <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
            {item.label}
          </a>
        ))}
      </nav>

      <button className="menu-button" onClick={() => setMenuOpen((open) => !open)} aria-label="Toggle menu">
        {menuOpen ? <X size={18} /> : <Menu size={18} />}
      </button>

      <a className="nav-cta" href="#contact">Let&apos;s talk <ArrowUpRight size={14} /></a>
    </header>
  )
}
