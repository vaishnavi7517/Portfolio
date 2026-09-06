import { motion } from 'framer-motion'
import { skillGroups } from '../data'

export function SkillsUniverse() {
  return (
    <section className="section-frame skills-universe" id="skills" aria-labelledby="skills-title">
      <div className="section-heading"><div><p className="eyebrow"><span>04</span> technology universe</p><h2 id="skills-title">A stack with <em>range.</em></h2></div><p className="section-description">No artificial progress bars.<br />Just the tools in the orbit.</p></div>
      <div className="skills-universe-layout"><div className="skill-core"><span>VAISHNAVI</span><strong>BUILDER</strong><small>curious by default</small></div><div className="skill-orbit orbit-outer" /><div className="skill-orbit orbit-inner" /><div className="skill-chip chip-a">React.js</div><div className="skill-chip chip-b">Python</div><div className="skill-chip chip-c">AI / ML</div><div className="skill-chip chip-d">Data</div><div className="skill-chip chip-e">Cloud</div><div className="skill-chip chip-f">Linux</div></div>
      <div className="skill-groups">{skillGroups.map((group) => <article className="skill-group" key={group.label}><span>{group.label}</span><div>{group.items.map((item) => <b key={item}>{item}</b>)}</div></article>)}</div>
    </section>
  )
}
