import React from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Code2, Boxes, GitBranch, Database, Radar, Monitor } from 'lucide-react'

const ICONS = [Code2, Boxes, GitBranch, Database, Radar, Monitor]

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.55, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] },
  }),
}

export default function Skills() {
  const { t } = useTranslation()
  const categories = t('skills.categories', { returnObjects: true })

  return (
    <section id="skills" className="section skills">
      <div className="bg-grid" />
      <div className="container">
        <motion.div
          className="section-head"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeUp}
        >
          <span className="eyebrow mono">{t('skills.eyebrow')}</span>
          <h2 className="section-title">{t('skills.title')} <span>{t('skills.titleHighlight')}</span></h2>
          <p className="section-subtitle">{t('skills.subtitle')}</p>
        </motion.div>

        <div className="skills__grid">
          {categories.map((cat, i) => {
            const Icon = ICONS[i % ICONS.length]
            return (
              <motion.div
                className="skill-card"
                key={cat.name}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.35 }}
                custom={i}
                variants={fadeUp}
              >
                <div className="skill-card__head">
                  <span className="skill-card__icon"><Icon size={17} /></span>
                  <h3>{cat.name}</h3>
                </div>
                <div className="skill-card__tags">
                  {cat.items.map((item) => (
                    <span className="tag" key={item}>{item}</span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
