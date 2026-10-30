import { useEffect, useState } from 'react'
import { Link } from 'react-router'
import { AnimatePresence, motion } from 'motion/react'
import { ArrowRight, ChevronDown, Download } from 'lucide-react'
import SocialLinks from '../components/SocialLinks.jsx'
import { profile } from '../data/profile.js'
import { EASE } from '../lib/motion.js'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
}
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
}

function RotatingWord({ words }) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % words.length), 2400)
    return () => clearInterval(id)
  }, [words.length])

  return (
    <span className="relative inline-grid overflow-hidden align-bottom">
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={words[index]}
          initial={{ y: '100%', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: '-100%', opacity: 0 }}
          transition={{ duration: 0.45, ease: EASE }}
          className="text-gradient whitespace-nowrap"
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}

function Background() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="bg-dots absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />
      <motion.div
        className="absolute -top-32 left-1/2 size-[36rem] -translate-x-1/2 rounded-full bg-accent/25 blur-[120px]"
        animate={{ x: [0, 80, -40, 0], y: [0, 40, 80, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-1/3 -right-24 size-[28rem] rounded-full bg-accent-2/20 blur-[120px]"
        animate={{ x: [0, -60, 20, 0], y: [0, -40, 30, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  )
}

export default function Hero() {
  return (
    <section className="relative flex min-h-svh items-center">
      <Background />
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mx-auto w-full max-w-6xl px-4 pt-24 pb-16 sm:px-6"
      >
        <motion.div variants={item}>
          <span className="inline-flex items-center gap-2 rounded-full border border-line bg-card/60 px-3 py-1 text-sm text-muted backdrop-blur">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
            </span>
            Disponible para nuevos proyectos
          </span>
        </motion.div>

        <motion.h1
          variants={item}
          className="mt-6 max-w-4xl text-4xl leading-[1.1] font-semibold tracking-tight sm:text-6xl md:text-7xl"
        >
          Hola, soy {profile.shortName}.
          <br />
          <span className="text-muted">{profile.role}</span>
        </motion.h1>

        <motion.p variants={item} className="mt-6 max-w-xl text-lg text-muted">
          {profile.tagline}
        </motion.p>

        <motion.p variants={item} className="mt-4 font-mono text-sm text-muted">
          Construyo <RotatingWord words={profile.rotatingWords} />
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-3">
          <Link to="/#proyectos" className="group btn-primary">
            Ver proyectos
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
          {profile.cvUrl ? (
            <a href={profile.cvUrl} download className="btn-secondary">
              <Download size={16} /> Descargar CV
            </a>
          ) : (
            <Link to="/#contacto" className="btn-secondary">
              Contactame
            </Link>
          )}
          <div className="ml-1 flex items-center gap-1">
            <SocialLinks linkClassName="grid size-11 place-items-center rounded-full text-muted transition-colors hover:bg-fg/[0.07] hover:text-fg" />
          </div>
        </motion.div>
      </motion.div>

      <motion.a
        href="#sobre-mi"
        aria-label="Bajar a la sección Sobre mí"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted hover:text-fg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ opacity: { delay: 1.2 }, y: { duration: 2, repeat: Infinity, ease: 'easeInOut' } }}
      >
        <ChevronDown size={24} />
      </motion.a>
    </section>
  )
}
