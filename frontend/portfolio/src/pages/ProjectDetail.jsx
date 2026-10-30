import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router'
import { motion } from 'motion/react'
import { ArrowLeft, ArrowRight, Check, ExternalLink, Maximize2 } from 'lucide-react'
import { FaGithub } from 'react-icons/fa6'
import Lightbox from '../components/Lightbox.jsx'
import ProjectCover from '../components/ProjectCover.jsx'
import Reveal from '../components/Reveal.jsx'
import { profile } from '../data/profile.js'
import { projects } from '../data/projects.js'
import { EASE } from '../lib/motion.js'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay, ease: EASE },
})

// Ícono que aparece al pasar el mouse sobre una imagen ampliable
function ZoomHint() {
  return (
    <span className="absolute top-3 right-3 grid size-9 place-items-center rounded-full bg-black/60 text-white opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
      <Maximize2 size={16} />
    </span>
  )
}

export default function ProjectDetail() {
  const { slug } = useParams()
  const index = projects.findIndex((p) => p.slug === slug)
  const project = projects[index]
  const [ampliada, setAmpliada] = useState(null)

  // Título de la pestaña con el nombre del proyecto
  useEffect(() => {
    if (!project) return
    const anterior = document.title
    document.title = `${project.title} — ${profile.name}`
    return () => {
      document.title = anterior
    }
  }, [project])

  if (!project) {
    return (
      <div className="mx-auto flex min-h-[70svh] max-w-6xl flex-col items-start justify-center px-4 pt-24 sm:px-6">
        <h1 className="text-3xl font-semibold">No encontré ese proyecto</h1>
        <Link to="/#proyectos" className="mt-6 inline-flex items-center gap-2 text-accent">
          <ArrowLeft size={16} /> Volver a proyectos
        </Link>
      </div>
    )
  }

  const next = projects[(index + 1) % projects.length]
  // La portada (si es una captura) y la galería se pueden ver en grande
  const capturas = [project.image, ...project.gallery].filter(Boolean)
  const offset = project.image ? 1 : 0

  return (
    // key: al pasar al siguiente proyecto se vuelven a reproducir las animaciones de entrada
    <article key={project.slug} className="mx-auto max-w-5xl px-4 pt-28 pb-16 sm:px-6 md:pt-32">
      <motion.div {...fadeUp()}>
        <Link
          to="/#proyectos"
          className="group inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-fg"
        >
          <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
          Volver a proyectos
        </Link>
      </motion.div>

      <motion.header {...fadeUp(0.05)} className="mt-8">
        <div className="flex flex-wrap gap-x-4 gap-y-1 font-mono text-sm text-muted">
          <span>{project.category}</span>
          <span>·</span>
          <span>{project.year}</span>
          <span>·</span>
          <span>{project.role}</span>
        </div>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">{project.title}</h1>
        <p className="mt-4 max-w-2xl text-lg text-muted">{project.summary}</p>

        <div className="mt-8 flex flex-wrap gap-3">
          {project.demoUrl && (
            <a href={project.demoUrl} target="_blank" rel="noreferrer" className="btn-primary">
              <ExternalLink size={16} /> Ver demo
            </a>
          )}
          {project.repoUrl && (
            <a href={project.repoUrl} target="_blank" rel="noreferrer" className="btn-secondary">
              <FaGithub size={16} /> Ver código
            </a>
          )}
        </div>
      </motion.header>

      <motion.div
        className="mt-12 aspect-[16/10] overflow-hidden rounded-3xl border border-line"
        initial={{ opacity: 0, scale: 0.94, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.15, ease: EASE }}
      >
        {project.image ? (
          <button
            type="button"
            onClick={() => setAmpliada(0)}
            aria-label="Ver la portada en grande"
            className="group relative block size-full cursor-zoom-in"
          >
            <ProjectCover project={project} />
            <ZoomHint />
          </button>
        ) : (
          <ProjectCover project={project} />
        )}
      </motion.div>

      <div className="mt-16 grid gap-12 md:grid-cols-[1.6fr_1fr]">
        <div className="space-y-12">
          <Reveal>
            <h2 className="mb-3 text-xl font-semibold">La necesidad</h2>
            <p className="leading-relaxed text-muted">{project.problem}</p>
          </Reveal>
          <Reveal>
            <h2 className="mb-3 text-xl font-semibold">La solución</h2>
            <p className="leading-relaxed text-muted">{project.solution}</p>
          </Reveal>
          <Reveal>
            <h2 className="mb-4 text-xl font-semibold">Lo más destacado</h2>
            <ul className="space-y-3">
              {project.highlights.map((h) => (
                <li key={h} className="flex gap-3 text-muted">
                  <Check size={18} className="mt-0.5 shrink-0 text-accent" />
                  {h}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal>
          <aside className="rounded-2xl border border-line bg-card/60 p-6 md:sticky md:top-24">
            <h2 className="mb-4 font-mono text-sm text-muted">Tecnologías</h2>
            <ul className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <li key={tag} className="rounded-full border border-line px-3 py-1 text-sm">
                  {tag}
                </li>
              ))}
            </ul>
            <h2 className="mt-6 mb-2 font-mono text-sm text-muted">Rol</h2>
            <p>{project.role}</p>
            <h2 className="mt-6 mb-2 font-mono text-sm text-muted">Año</h2>
            <p>{project.year}</p>
          </aside>
        </Reveal>
      </div>

      {project.gallery.length > 0 && (
        <section className="mt-20">
          <h2 className="mb-6 text-xl font-semibold">Capturas</h2>
          <div className="grid items-start gap-6 sm:grid-cols-2">
            {project.gallery.map((src, i) => (
              <Reveal key={src} delay={(i % 2) * 0.1}>
                <button
                  type="button"
                  onClick={() => setAmpliada(i + offset)}
                  aria-label={`Ver la captura ${i + 1} en grande`}
                  className="group relative block w-full cursor-zoom-in overflow-hidden rounded-2xl border border-line"
                >
                  <img
                    src={src}
                    alt={`${project.title}, captura ${i + 1}`}
                    loading="lazy"
                    className="w-full transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                  <ZoomHint />
                </button>
              </Reveal>
            ))}
          </div>
        </section>
      )}

      <Lightbox
        images={capturas}
        index={ampliada}
        onChange={setAmpliada}
        onClose={() => setAmpliada(null)}
        title={project.title}
      />

      {next.slug !== project.slug && (
        <Link
          to={`/proyectos/${next.slug}`}
          className="group mt-24 flex items-center justify-between gap-4 rounded-2xl border border-line p-6 transition-colors hover:border-accent/40 hover:bg-card/60"
        >
          <div>
            <p className="font-mono text-sm text-muted">Siguiente proyecto</p>
            <p className="mt-1 text-xl font-semibold sm:text-2xl">{next.title}</p>
          </div>
          <ArrowRight size={24} className="text-accent transition-transform group-hover:translate-x-1" />
        </Link>
      )}
    </article>
  )
}
