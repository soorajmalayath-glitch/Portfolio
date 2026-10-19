import { motion } from 'framer-motion'
import { slideUp } from '../animations/variants'
export default function SectionTitle({ eyebrow, title, note }) { return <motion.div className="section-title" variants={slideUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }}><span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{note && <p>{note}</p>}</motion.div> }
