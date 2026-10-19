import { motion } from 'framer-motion'
import { FiMoon, FiSun } from 'react-icons/fi'
export default function ThemeToggle({ theme, onToggle }) { const Icon = theme === 'dark' ? FiSun : FiMoon; return <motion.button className="icon-button" onClick={onToggle} whileHover={{ rotate: 12, scale: 1.08 }} whileTap={{ scale: 0.9 }} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}><Icon /></motion.button> }
