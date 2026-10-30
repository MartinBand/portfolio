import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import Section from '../components/Section.jsx'
import Reveal from '../components/Reveal.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import { categories, projects } from '../data/projects.js'

export default function Projects() {
  const [filter, setFilter] = useState('Todos')
  const visible = filter === 'Todos' ? projects : projects.filter((p) => p.category === filter)

  return (
    <Section id="proyectos" eyebrow="02 — Proyectos" title="Cosas que construí">
      <Reveal className="mb-10 flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setFilter(category)}
            aria-pressed={filter === category}
            className={`relative isolate rounded-full px-4 py-2 text-sm transition-colors ${
              filter === category ? 'text-bg' : 'text-muted hover:text-fg'
            }`}
          >
            {filter === category && (
              <motion.span
                layoutId="filter-active"
                className="absolute inset-0 -z-10 rounded-full bg-fg"
                transition={{ type: 'spring', stiffness: 400, damping: 35 }}
              />
            )}
            {category}
          </button>
        ))}
      </Reveal>

      <motion.ul layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {visible.map((project) => (
            <motion.li
              key={project.slug}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <ProjectCard project={project} />
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>
    </Section>
  )
}
