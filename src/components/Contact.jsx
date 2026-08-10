import React from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Github, ArrowUpRight } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] },
  }),
}

const CONTACTS = [
  { key: 'email', icon: Mail, value: 'suzannoirwinmaharavo@gmail.com', href: 'mailto:suzannoirwinmaharavo@gmail.com' },
  { key: 'phone', icon: Phone, value: '+261 38 78 167 31', href: 'tel:+261387816731' },
  { key: 'location', icon: MapPin, value: 'Fianarantsoa, Madagascar', href: null },
  { key: 'github', icon: Github, value: 'github.com/papyhunter05', href: 'https://github.com/papyhunter05' },
]

export default function Contact() {
  const { t } = useTranslation()

  return (
    <section id="contact" className="section contact">
      <div className="bg-grid" />
      <div className="container">
        <motion.div
          className="section-head section-head--center"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeUp}
        >
          <span className="eyebrow mono">{t('contact.eyebrow')}</span>
          <h2 className="section-title">{t('contact.title')} <span>{t('contact.titleHighlight')}</span></h2>
          <p className="section-subtitle">{t('contact.subtitle')}</p>
        </motion.div>

        <div className="contact__grid">
          {CONTACTS.map((c, i) => {
            const Icon = c.icon
            const content = (
              <>
                <span className="contact-card__icon"><Icon size={18} /></span>
                <div>
                  <div className="contact-card__label mono">{t(`contact.${c.key}`)}</div>
                  <div className="contact-card__value">{c.value}</div>
                </div>
                {c.href && <ArrowUpRight className="contact-card__arrow" size={16} />}
              </>
            )
            return (
              <motion.div
                key={c.key}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.4 }}
                custom={i}
                variants={fadeUp}
              >
                {c.href ? (
                  <a className="contact-card" href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
                    {content}
                  </a>
                ) : (
                  <div className="contact-card contact-card--static">{content}</div>
                )}
              </motion.div>
            )
          })}
        </div>

        <motion.div
          className="contact__cta"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.6 }}
          variants={fadeUp}
        >
          <a className="btn btn--primary" href="mailto:suzannoirwinmaharavo@gmail.com">
            <Mail size={16} /> {t('contact.sendEmail')}
          </a>
        </motion.div>
      </div>
    </section>
  )
}
