import React from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Briefcase, MapPin } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] },
  }),
}

export default function Experience() {
  const { t } = useTranslation()
  const items = t('experience.items', { returnObjects: true })

  return (
    <section id="experience" className="section experience">
      <div className="bg-grid" />
      <div className="container">
        <motion.div
          className="section-head"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeUp}
        >
          <span className="eyebrow mono">{t('experience.eyebrow')}</span>
          <h2 className="section-title">{t('experience.title')} <span>{t('experience.titleHighlight')}</span></h2>
        </motion.div>

        <div className="exp-list">
          {items.map((exp, i) => (
            <motion.article
              className="exp-item"
              key={exp.company + exp.period}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.35 }}
              custom={i}
              variants={fadeUp}
            >
              <div className="exp-item__side">
                <span className="exp-item__icon"><Briefcase size={16} /></span>
                <span className="exp-item__line" />
              </div>
              <div className="exp-item__body">
                <span className="exp-item__period mono">{exp.period}</span>
                <h3 className="exp-item__role">{exp.role}</h3>
                <p className="exp-item__company">{exp.company}</p>
                <p className="exp-item__place"><MapPin size={13} /> {exp.place}</p>
                <ul className="exp-item__tasks">
                  {exp.tasks.map((task) => (
                    <li key={task}>{task}</li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
