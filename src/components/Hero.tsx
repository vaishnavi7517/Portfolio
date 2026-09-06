import { ArrowDownRight, ArrowUpRight, Github, Linkedin, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'
import { ThreeScene } from './ThreeScene'

export function Hero() {
  return (
    <section id="home" className="hero section-frame">
      <div className="hero-background" aria-hidden="true">
        <span className="sun-disc" />
        <span className="wire-orbit orbit-one" />
        <span className="wire-orbit orbit-two" />
        <span className="terrain-line" />
      </div>

      <motion.div
        className="hero-copy"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <p className="eyebrow"><span>01</span> personal developer universe / 2026</p>
        <h1>
          Building intelligent
          <em>digital experiences.</em>
        </h1>
        <p className="hero-role">VAISHNAVI ANANDA PATIL <span> / </span> COMPUTER SCIENCE &amp; BUSINESS SYSTEMS STUDENT</p>
        <div className="role-pills"><span>AI/ML</span><span>Python</span><span>React.js</span><span>Data</span><span>Cloud</span></div>
        <p className="hero-lede">Computer Science &amp; Business Systems student passionate about building intelligent applications, solving real-world problems and continuously exploring AI, software engineering, data and cloud technologies.</p>

        <div className="hero-actions">
          <a href="#projects" className="primary-button">
            Explore my work <ArrowDownRight size={16} />
          </a>
          <a href="/resume.html" target="_blank" rel="noopener noreferrer" className="text-link">
            View resume <ArrowUpRight size={15} />
          </a>
        </div>
      </motion.div>

      <motion.div
        className="profile-orb"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="portrait-frame">
          <div className="portrait-badge"><Sparkles size={12} /> curious / technical / builder</div>
          <ThreeScene />
        </div>
        <span className="portrait-label">the builder<br /><b>VAISHNAVI</b></span>
        <span className="floating-badge">ENTER<br /><b>THE WORLD</b></span>
        <span className="sketch-circle" />
        <span className="orbit-marker marker-one" />
        <span className="orbit-marker marker-two" />
      </motion.div>

      <div className="hero-foot">
        <span>scroll to explore</span>
        <span className="scroll-line" />
        <span>01 — 07</span>
      </div>

      <div className="social-row">
        <a href="https://github.com/vaishnavi7517" target="_blank" rel="noreferrer" aria-label="GitHub">
          <Github size={16} />
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
          <Linkedin size={16} />
        </a>
      </div>
    </section>
  )
}
