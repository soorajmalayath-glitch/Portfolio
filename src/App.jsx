import { useEffect, useState } from 'react'
import { AnimatePresence, motion, MotionConfig, useReducedMotion } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollProgress from './components/ScrollProgress'
import { useTheme } from './hooks/useTheme'
export default function App() {
  const [theme, toggleTheme] = useTheme(), [loading, setLoading] = useState(true), reduceMotion = useReducedMotion()
  useEffect(() => { const timer = window.setTimeout(() => setLoading(false), reduceMotion ? 0 : 650); return () => window.clearTimeout(timer) }, [reduceMotion])
  return <MotionConfig reducedMotion="user"><ScrollProgress /><AnimatePresence>{loading && <motion.div className="preloader" initial={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: .35 }}><motion.span initial={{ y: 14, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="wordmark">sm<span>.</span></motion.span><motion.div className="preloader-line" initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: .55, ease: 'easeInOut' }} /></motion.div>}</AnimatePresence><Navbar theme={theme} onThemeToggle={toggleTheme} /><main><Hero /><About /><Skills /><Projects /><Experience /><Contact /></main><Footer /></MotionConfig>
}
