import { ArrowUpRight, Github, Linkedin, MapPin, Sparkles } from 'lucide-react'
import { motion, useScroll, useSpring } from 'framer-motion'
import { Hero } from '../components/Hero'
import { Navbar } from '../components/Navbar'
import { InteractiveWorld } from '../components/InteractiveWorld'
import { ExperienceTimeline } from '../components/ExperienceTimeline'
import { ProjectGallery } from '../components/ProjectGallery'
import { SkillsUniverse } from '../components/SkillsUniverse'
import { CertificationGallery } from '../components/CertificationGallery'

export function Home() {
  const { scrollYProgress } = useScroll()
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 110, damping: 28, mass: 0.2 })

  return (
    <div className="world-shell">
      <div className="grain" aria-hidden="true" />
      <div className="cursor-glow" aria-hidden="true" />
      <motion.div className="scroll-progress" style={{ scaleX: smoothProgress }} aria-hidden="true" />
      <Navbar />
      <motion.main initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
        <Hero />
        <InteractiveWorld />

        <section className="section-frame about-section" id="about" aria-labelledby="about-title">
          <div className="section-heading"><div><p className="eyebrow"><span>01</span> about the builder</p><h2 id="about-title">A practical mind<br /><em>with a curious edge.</em></h2></div><p className="section-description">A studio for ideas that become<br />functional digital products.</p></div>
          <div className="about-grid"><div className="about-copy"><p>Hi, I&apos;m Vaishnavi Ananda Patil — a Computer Science &amp; Business Systems student passionate about technology, software development, artificial intelligence, data and cloud computing.</p><p>I enjoy turning ideas into functional digital products and learning by building. My experience spans React.js development, Python, machine learning, AI, data analytics, Linux and software projects.</p><span className="sketch-arrow">keep scrolling <span>↘</span></span></div><div className="about-facts"><div><MapPin size={15} /><span>Location</span><strong>Kolhapur, Maharashtra, India</strong></div><div><Sparkles size={15} /><span>Education</span><strong>Computer Science &amp; Business Systems</strong></div><div><span className="fact-glyph">’28</span><span>Graduation</span><strong>Expected 2028</strong></div><div><ArrowUpRight size={15} /><span>Focus</span><strong>Software / AI/ML / Data / Cloud</strong></div></div></div>
          <div className="stats-strip"><div><strong>2028</strong><span>expected graduation</span></div><div><strong>5+</strong><span>experience roles</span></div><div><strong>7+</strong><span>featured projects</span></div><div><strong>multiple</strong><span>technology domains</span></div></div>
        </section>

        <ExperienceTimeline />
        <ProjectGallery />
        <SkillsUniverse />
        <CertificationGallery />

        <section className="section-frame education-section" id="education" aria-labelledby="education-title">
          <div className="education-marker"><span>06</span><div /></div><div className="section-heading"><div><p className="eyebrow"><span>06</span> education terminal</p><h2 id="education-title">Where the<br /><em>foundation started.</em></h2></div><p className="section-description">Learning is part of the architecture.</p></div>
          <div className="education-grid"><article><span>Primary</span><h3>KIT&apos;S College of Engineering, Kolhapur</h3><p>Computer Science &amp; Business Systems</p><strong>Expected Graduation: 2028</strong></article><article><span>Earlier chapter</span><h3>Government Polytechnic Kolhapur</h3><p>Additional details are kept intentionally concise.</p></article></div>
        </section>

        <section className="section-frame learning-section" id="learning" aria-labelledby="learning-title">
          <div className="section-heading"><div><p className="eyebrow"><span>07</span> growth loop</p><h2 id="learning-title">Always building.<br /><em>Always learning.</em></h2></div><p className="section-description">The next room is never very far away.</p></div>
          <div className="learning-orbit"><div className="learning-core">OPEN<br /><em>LOOP</em></div>{['AI & ML', 'Cloud', 'Data Engineering', 'Full-Stack', 'Generative AI', 'Cybersecurity', 'Software Engineering'].map((area, index) => <motion.span className={`learning-node learning-node-${index + 1}`} key={area} animate={{ y: [0, index % 2 ? -7 : 7, 0] }} transition={{ duration: 4 + index * .25, repeat: Infinity, ease: 'easeInOut' }}>{area}</motion.span>)}</div>
        </section>

        <section className="section-frame recruiter-section" aria-labelledby="recruiter-title">
          <div><p className="eyebrow"><span>08</span> next signal</p><h2 id="recruiter-title">Looking for the next<br /><em>problem to solve.</em></h2></div><div className="recruiter-copy"><p>I&apos;m interested in opportunities where I can combine software development, data, AI and problem-solving to build meaningful technology.</p><div className="recruiter-actions"><a href="/resume.html" target="_blank" rel="noopener noreferrer" className="primary-button">View resume <ArrowUpRight size={15} /></a><a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="outline-button"><Linkedin size={15} /> Connect on LinkedIn</a><a href="https://github.com/vaishnavi7517" target="_blank" rel="noreferrer" className="outline-button"><Github size={15} /> View GitHub</a></div></div>
        </section>

        <section className="section-frame contact-section" id="contact" aria-labelledby="contact-title">
          <div className="contact-terminal"><div className="terminal-top"><span><i /> <i /> <i /></span><small>communication_terminal.exe</small><span>READY</span></div><div className="contact-content"><p className="eyebrow"><span>09</span> initialize transmission</p><h2 id="contact-title">Let&apos;s build<br /><em>something.</em></h2><form className="contact-form" onSubmit={(event) => event.preventDefault()}><label>Name<input name="name" autoComplete="name" required placeholder="Your name" /></label><label>Email<input name="email" type="email" autoComplete="email" required placeholder="you@company.com" /></label><label>Message<textarea name="message" required placeholder="Tell me about the problem worth solving..." /></label><button type="submit">Send message <ArrowUpRight size={15} /></button></form><p className="contact-note">Prefer direct communication? <a href="mailto:vaishnavi.ananda.patil@gmail.com">vaishnavi.ananda.patil@gmail.com</a></p></div></div>
          <footer className="site-footer"><span>VAISHNAVI / VP</span><span>built with curiosity / 2026</span></footer>
        </section>
      </motion.main>
    </div>
  )
}
