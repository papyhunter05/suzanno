import React from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { PhoneCall, Router, HeartPulse, Users, Smartphone, BarChart3, Github, ArrowUpRight } from 'lucide-react'

const ICONS = [PhoneCall, Router, HeartPulse, Users, Smartphone, BarChart3]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.55, delay: (i % 3) * 0.09, ease: [0.16, 1, 0.3, 1] },
  }),
}

export default function Projects() {
  const { t } = useTranslation()
  const items = t('projects.items', { returnObjects: true })

  return (
    <section id="projects" className="section projects">
      <div className="bg-grid" />
      <div className="container">
        <motion.div
          className="section-head"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeUp}
        >
          <span className="eyebrow mono">{t('projects.eyebrow')}</span>
          <h2 className="section-title">{t('projects.title')} <span>{t('projects.titleHighlight')}</span></h2>
          <p className="section-subtitle">{t('projects.subtitle')}</p>
        </motion.div>

        <div className="projects__grid">
          {items.map((p, i) => {
            const Icon = ICONS[i % ICONS.length]
            return (
              <motion.article
                className="project-card"
                key={p.title}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                custom={i}
                variants={fadeUp}
                whileHover={{ y: -6 }}
              >
                <div className="project-card__head">
                  <span className="project-card__icon"><Icon size={20} /></span>
                  <span className="project-card__index mono">{String(i + 1).padStart(2, '0')}</span>
                </div>
                <h3 className="project-card__title">{p.title}</h3>
                <p className="project-card__desc">
                  {p.description ? p.description : <em>{t('projects.placeholder')}</em>}
                </p>
                <div className="project-card__tech">
                  {p.tech.map((tech) => (
                    <span className="tag tag--sm" key={tech}>{tech}</span>
                  ))}
                </div>
              </motion.article>
            )
          })}
        </div>

        <motion.div
          className="projects__cta"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.6 }}
          variants={fadeUp}
        >
          <a href="https://github.com/papyhunter05" target="_blank" rel="noreferrer" className="btn btn--ghost">
            <Github size={16} /> {t('projects.viewProfile')} <ArrowUpRight size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
