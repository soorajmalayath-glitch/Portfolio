import { motion } from 'framer-motion'
import { FiArrowUpRight } from 'react-icons/fi'
import { skills } from '../data/skills'
import SectionTitle from './SectionTitle'
import { staggerContainer, slideUp } from '../animations/variants'
export default function Skills() { return <section className="section-shell section-space" id="skills"><SectionTitle eyebrow="My toolkit" title="The right tool for the job." note="A flexible stack for building robust products end to end." /><motion.div className="skills-grid" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>{skills.map((group) => <motion.article className="skill-card" key={group.name} variants={slideUp} whileHover={{ y: -5 }}><div className="card-topline"><span className="eyebrow">{group.number} / 04</span><FiArrowUpRight /></div><h3>{group.name}</h3><div className="tag-list">{group.items.map((item) => <span className="skill-tag" key={item}>{item}</span>)}</div></motion.article>)}</motion.div></section> }
