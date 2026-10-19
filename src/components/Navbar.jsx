import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FiArrowUpRight, FiMenu, FiX } from 'react-icons/fi'
import ThemeToggle from './ThemeToggle'
const links = [['About', 'about'], ['Skills', 'skills'], ['Projects', 'projects'], ['Journey', 'experience']]
export default function Navbar({ theme, onThemeToggle }) {
  const [active, setActive] = useState('home'), [open, setOpen] = useState(false)
  useEffect(() => { const observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) setActive(entry.target.id) }), { rootMargin: '-35% 0px -55% 0px' }); document.querySelectorAll('main section[id]').forEach((section) => observer.observe(section)); return () => observer.disconnect() }, [])
  useEffect(() => { document.body.classList.toggle('menu-open', open); return () => document.body.classList.remove('menu-open') }, [open])
  const close = () => setOpen(false)
  return <header className="navbar"><div className="nav-inner"><a href="#home" className="wordmark" onClick={close} aria-label="Sooraj, home">sm<span>.</span></a><nav className="desktop-nav" aria-label="Main navigation">{links.map(([label, id]) => <a key={id} className={active === id ? 'active' : ''} href={`#${id}`}>{label}</a>)}</nav><div className="nav-actions"><a className="nav-contact" href="#contact">Let’s talk <FiArrowUpRight /></a><ThemeToggle theme={theme} onToggle={onThemeToggle} /><button className="icon-button menu-toggle" aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <FiX /> : <FiMenu />}</button></div></div><AnimatePresence>{open && <motion.nav className="mobile-drawer" aria-label="Mobile navigation" initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: .2 }}>{links.map(([label, id], index) => <motion.a key={id} href={`#${id}`} onClick={close} initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * .04 }}><span>0{index + 1}</span>{label}<FiArrowUpRight /></motion.a>)}<a href="#contact" onClick={close}><span>05</span>Contact <FiArrowUpRight /></a></motion.nav>}</AnimatePresence></header>
}
