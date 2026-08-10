import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sun, Moon, Github } from 'lucide-react'
import { useTheme } from '../context/ThemeContext.jsx'

const LINKS = ['about', 'skills', 'experience', 'projects', 'contact']

export default function Navbar() {
  const { t, i18n } = useTranslation()
  const { theme, toggleTheme } = useTheme()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const switchLang = (lng) => {
    i18n.changeLanguage(lng)
    document.documentElement.lang = lng
  }

  const goTo = (id) => {
    setOpen(false)
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        <a href="#top" className="navbar__logo" onClick={(e) => { e.preventDefault(); goTo('top') }}>
          <span className="navbar__logo-mark">&lt;/&gt;</span>
          <span className="navbar__logo-text mono">SI<span>M</span></span>
        </a>

        <nav className="navbar__links navbar__links--desktop">
          {LINKS.map((id) => (
            <button key={id} className="navbar__link" onClick={() => goTo(id)}>
              {t(`nav.${id}`)}
            </button>
          ))}
        </nav>

        <div className="navbar__actions">
          <div className="lang-switch mono" role="group" aria-label="Language">
            <button
              className={i18n.language?.startsWith('fr') ? 'is-active' : ''}
              onClick={() => switchLang('fr')}
            >FR</button>
            <span className="lang-switch__sep">/</span>
            <button
              className={i18n.language?.startsWith('en') ? 'is-active' : ''}
              onClick={() => switchLang('en')}
            >EN</button>
          </div>

          <button
            className="icon-btn"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? t('theme.light') : t('theme.dark')}
            title={theme === 'dark' ? t('theme.light') : t('theme.dark')}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={theme}
                initial={{ opacity: 0, rotate: -60, scale: 0.5 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: 60, scale: 0.5 }}
                transition={{ duration: 0.25 }}
                style={{ display: 'inline-flex' }}
              >
                {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
              </motion.span>
            </AnimatePresence>
          </button>

          <a
            className="icon-btn navbar__github"
            href="https://github.com/papyhunter05"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            title="GitHub"
          >
            <Github size={17} />
          </a>

          <button className="icon-btn navbar__burger" onClick={() => setOpen((o) => !o)} aria-label="Menu">
            {open ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            className="navbar__mobile"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
          >
            {LINKS.map((id) => (
              <button key={id} className="navbar__mobile-link" onClick={() => goTo(id)}>
                {t(`nav.${id}`)}
              </button>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
