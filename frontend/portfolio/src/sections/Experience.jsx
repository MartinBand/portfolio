import { motion, useScroll, useSpring } from 'motion/react'
import { useRef } from 'react'
import { Award, Briefcase, GraduationCap } from 'lucide-react'
import Section from '../components/Section.jsx'
import Reveal from '../components/Reveal.jsx'
import { experience } from '../data/profile.js'

const icons = { work: Briefcase, education: GraduationCap, course: Award }

export default function Experience() {
  const listRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: listRef, offset: ['start 75%', 'end 60%'] })
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 })

  return (
    <Section id="experiencia" eyebrow="03 — Recorrido" title="Mi recorrido">
      <div ref={listRef} className="relative ml-5 max-w-3xl">
        <span aria-hidden className="absolute top-0 bottom-0 left-0 w-px bg-line" />
        <motion.span
          aria-hidden
          style={{ scaleY: progress }}
          className="absolute top-0 bottom-0 left-0 w-px origin-top bg-gradient-to-b from-accent to-accent-2"
        />
        <ol>
          {experience.map((item, i) => {
            const Icon = icons[item.type] ?? Briefcase
            return (
              <li key={`${item.title}-${item.period}`} className="relative pb-12 pl-10 last:pb-0">
                <span className="absolute top-0 -left-5 grid size-10 place-items-center rounded-full border border-line bg-bg text-accent">
                  <Icon size={18} />
                </span>
                <Reveal delay={i * 0.05}>
                  <p className="font-mono text-sm text-muted">{item.period}</p>
                  <h3 className="mt-1 text-lg font-semibold">
                    {item.title} <span className="font-normal text-muted">· {item.place}</span>
                  </h3>
                  <p className="mt-2 leading-relaxed text-muted">{item.description}</p>
                </Reveal>
              </li>
            )
          })}
        </ol>
      </div>
    </Section>
  )
}
