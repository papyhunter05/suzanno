import React from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { MapPin, Cake, Languages, Heart, GraduationCap } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] },
  }),
}

export default function About() {
  const { t } = useTranslation()
  const education = t('about.education', { returnObjects: true })

  const facts = [
    { icon: MapPin, label: t('about.factLocation'), value: 'Fianarantsoa, Madagascar' },
    { icon: Cake, label: t('about.factDob'), value: t('about.dobValue') },
    { icon: Languages, label: t('about.factLanguages'), value: t('about.languagesValue') },
    { icon: Heart, label: t('about.factInterests'), value: t('about.interestsValue') },
  ]

  return (
    <section id="about" className="section about">
      <div className="bg-grid" />
      <div className="container">
        <motion.div
          className="section-head"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeUp}
        >
          <span className="eyebrow mono">{t('about.eyebrow')}</span>
          <h2 className="section-title">{t('about.title')} <span>{t('about.titleHighlight')}</span></h2>
        </motion.div>

        <div className="about__grid">
          <motion.div
            className="about__card"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            custom={0}
            variants={fadeUp}
          >
            <div className="about__avatar-wrap">
              <div className="about__avatar mono">SIM</div>
              <span className="about__avatar-ring" />
            </div>
            <p className="about__bio">{t('about.bio')}</p>
          </motion.div>

          <motion.div
            className="about__facts"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            custom={1}
            variants={fadeUp}
          >
            {facts.map((f) => (
              <div className="fact" key={f.label}>
                <span className="fact__icon"><f.icon size={16} /></span>
                <div>
                  <div className="fact__label mono">{f.label}</div>
                  <div className="fact__value">{f.value}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="about__education"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          custom={2}
          variants={fadeUp}
        >
          <h3 className="about__edu-title"><GraduationCap size={18} /> {t('about.educationTitle')}</h3>
          <div className="timeline">
            {education.map((e, i) => (
              <motion.div
                className="timeline__item"
                key={e.degree}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.5 }}
                custom={i}
                variants={fadeUp}
              >
                <div className="timeline__marker" />
                <div className="timeline__content">
                  <div className="timeline__top">
                    <h4>{e.degree}</h4>
                    <span className="timeline__period mono">{e.period}</span>
                  </div>
                  <p className="timeline__school">{e.school}</p>
                  <p className="timeline__detail">{e.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
