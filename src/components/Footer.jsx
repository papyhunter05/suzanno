import React from 'react'
import { useTranslation } from 'react-i18next'
import { Github } from 'lucide-react'

export default function Footer() {
  const { t } = useTranslation()
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span className="mono footer__brand">SIM<span className="footer__brand-dot">.</span></span>
        <p className="footer__text">© {year} Suzanno Irwin MAHARAVO — {t('footer.rights')}</p>
        <a className="footer__link" href="https://github.com/papyhunter05" target="_blank" rel="noreferrer">
          <Github size={15} /> github.com/papyhunter05
        </a>
      </div>
    </footer>
  )
}
