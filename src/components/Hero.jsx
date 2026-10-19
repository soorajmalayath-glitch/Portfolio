import { useEffect, useState } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { FiArrowDownRight, FiArrowUpRight, FiDownload } from 'react-icons/fi'
import { site } from '../data/site'
import { socials } from '../data/socials'

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const reduceMotion = useReducedMotion()
  const { scrollY } = useScroll()

  const driftDown = useTransform(scrollY, [0, 700], [0, reduceMotion ? 0 : 85])
  const driftUp = useTransform(scrollY, [0, 700], [0, reduceMotion ? 0 : -50])

  const [firstName, ...surname] = site.name.split(' ')

  useEffect(() => {
    const timer = window.setInterval(() => {
      setRoleIndex((current) => (current + 1) % site.roles.length)
    }, 3000)
    return () => window.clearInterval(timer)
  }, [])

  return (
    <section className="hero section-shell" id="home">
      <div className="hero-grid" aria-hidden="true" />
      <motion.div className="hero-orb orb-one" style={{ y: driftDown }} aria-hidden="true" />
      <motion.div className="hero-orb orb-two" style={{ y: driftUp }} aria-hidden="true" />

      <div className="hero-content">
        <motion.div
          className="availability"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
        >
          <span /> {site.availability}
        </motion.div>

        <motion.p
          className="hero-greeting"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
        >
          Hello, I’m
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.7 }}
        >
          {firstName}
          <br />
          <span>
            {surname.join(' ')}
            <span className="accent-dot">.</span>
          </span>
        </motion.h1>

        <div className="hero-role">
          <span className="role-line" />
          <motion.span
            key={roleIndex}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {site.roles[roleIndex]}
          </motion.span>
        </div>

        <motion.p
          className="hero-copy"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          {site.tagline}
        </motion.p>

        <motion.div
          className="hero-ctas"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.95 }}
        >
          <a className="button button-primary" href="#projects">
            Explore my work <FiArrowUpRight />
          </a>
          <a
            className="button button-quiet"
            href={site.resume}
            download="Sooraj_Muralidharan_Resume.pdf"
          >
            Download resume <FiDownload />
          </a>
        </motion.div>

        <motion.div
          className="hero-socials"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
        >
          {socials.map(({ label, href, icon: Icon }) => {
            const isExternal = href.startsWith('http')
            return (
              <a
                href={href}
                key={label}
                aria-label={label}
                target={isExternal ? '_blank' : undefined}
                rel={isExternal ? 'noreferrer' : undefined}
              >
                <Icon />
              </a>
            )
          })}
          <span className="social-rule" />
          <span className="social-caption">Find me around the web</span>
        </motion.div>
      </div>

      <div className="hero-index">
        <span>01 / 05</span>
        <a href="#about">
          Scroll to explore <FiArrowDownRight />
        </a>
      </div>

      <div className="hero-side-note">DESIGN · CODE · ITERATE</div>
    </section>
  )
}