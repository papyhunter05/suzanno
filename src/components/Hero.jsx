import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { ArrowRight, Mail, MapPin, ChevronDown } from 'lucide-react'

const NAME = 'Suzanno Irwin Maharavo'

function useTypewriter(text, speed = 55, startDelay = 350) {
  const [output, setOutput] = useState('')
  const [done, setDone] = useState(false)

  useEffect(() => {
    let i = 0
    let interval
    const timeout = setTimeout(() => {
      interval = setInterval(() => {
        i += 1
        setOutput(text.slice(0, i))
        if (i >= text.length) {
          clearInterval(interval)
          setDone(true)
        }
      }, speed)
    }, startDelay)
    return () => { clearTimeout(timeout); clearInterval(interval) }
  }, [text, speed, startDelay])

  return { output, done }
}

function NetworkGraph() {
  const { t } = useTranslation()
  const nodes = [
    { key: 'nodeWeb', x: 200, y: 46, color: 'var(--accent)' },
    { key: 'nodeMobile', x: 354, y: 200, color: 'var(--accent-2)' },
    { key: 'nodeSystems', x: 200, y: 354, color: 'var(--accent-2)' },
    { key: 'nodeNetwork', x: 46, y: 200, color: 'var(--accent)' },
  ]

  return (
    <svg className="hero-graph" viewBox="0 0 400 400" role="img" aria-label="Network topology diagram">
      <defs>
        <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.35" />
          <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* connecting lines */}
      {nodes.map((n) => (
        <line
          key={`line-${n.key}`}
          x1="200" y1="200" x2={n.x} y2={n.y}
          stroke="var(--border-strong)" strokeWidth="1.4"
        />
      ))}

      {/* radar pulses from core */}
      <circle cx="200" cy="200" r="60" fill="url(#coreGlow)" />
      {[0, 1, 2].map((i) => (
        <circle
          key={i}
          cx="200" cy="200" r="40"
          fill="none" stroke="var(--accent)" strokeWidth="1"
          opacity="0"
          style={{
            transformOrigin: '200px 200px',
            animation: `ping-ring 3.6s ${i * 1.2}s ease-out infinite`,
          }}
        />
      ))}

      {/* traveling packets */}
      {nodes.map((n, idx) => (
        <circle key={`packet-${n.key}`} r="4" fill={n.color}>
          <animateMotion
            dur={`${2.6 + idx * 0.4}s`}
            begin={`${idx * 0.5}s`}
            repeatCount="indefinite"
            path={`M200,200 L${n.x},${n.y} L200,200`}
          />
        </circle>
      ))}

      {/* core node */}
      <circle cx="200" cy="200" r="26" fill="var(--surface)" stroke="var(--accent)" strokeWidth="1.6" />
      <text x="200" y="205" textAnchor="middle" className="hero-graph__core-label mono">SIM</text>

      {/* outer nodes */}
      {nodes.map((n) => (
        <g key={n.key} style={{ color: n.color }}>
          <circle cx={n.x} cy={n.y} r="20" fill="var(--surface)" stroke="currentColor" strokeWidth="1.4" style={{ animation: 'node-pulse 3s ease-in-out infinite' }} />
        </g>
      ))}

      {/* labels placed outside node circles */}
      <text x="200" y="26" textAnchor="middle" className="hero-graph__label mono">{t(`hero.${nodes[0].key}`)}</text>
      <text x="384" y="204" textAnchor="start" className="hero-graph__label mono">{t(`hero.${nodes[1].key}`)}</text>
      <text x="200" y="386" textAnchor="middle" className="hero-graph__label mono">{t(`hero.${nodes[2].key}`)}</text>
      <text x="16" y="204" textAnchor="end" className="hero-graph__label mono">{t(`hero.${nodes[3].key}`)}</text>
    </svg>
  )
}

export default function Hero() {
  const { t } = useTranslation()
  const { output, done } = useTypewriter(NAME)

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="top" className="hero">
      <div className="bg-grid" />
      <div className="hero__glow hero__glow--a" />
      <div className="hero__glow hero__glow--b" />

      <div className="container hero__inner">
        <motion.div
          className="hero__content"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="hero__terminal-line mono">
            <span className="hero__prompt">guest@portfolio</span>
            <span className="hero__prompt-sep">:~$</span>
            <span> {t('hero.cmd')}</span>
          </div>

          <p className="hero__greeting">{t('hero.greeting')}</p>
          <h1 className="hero__name">
            {output}
            <span className={`hero__cursor ${done ? 'hero__cursor--blink' : ''}`}>_</span>
          </h1>

          <p className="hero__role">{t('hero.role')}</p>
          <p className="hero__tagline">{t('hero.tagline')}</p>

          <div className="hero__meta">
            <span className="hero__meta-item"><MapPin size={14} /> {t('hero.location')}</span>
            <span className="hero__meta-item hero__meta-item--dot"><span className="dot-live" /> {t('hero.available')}</span>
          </div>

          <div className="hero__ctas">
            <button className="btn btn--primary" onClick={() => scrollTo('projects')}>
              {t('hero.ctaProjects')} <ArrowRight size={16} />
            </button>
            <button className="btn btn--ghost" onClick={() => scrollTo('contact')}>
              <Mail size={16} /> {t('hero.ctaContact')}
            </button>
          </div>
        </motion.div>

        <motion.div
          className="hero__visual"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          <NetworkGraph />
        </motion.div>
      </div>

      <button className="hero__scroll-hint" onClick={() => scrollTo('about')} aria-label={t('hero.scroll')}>
        <ChevronDown size={18} />
      </button>
    </section>
  )
}
