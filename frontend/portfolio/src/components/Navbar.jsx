import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router'
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'motion/react'
import { Menu, Moon, Sun, X } from 'lucide-react'
import { experience, profile } from '../data/profile.js'
import { useTheme } from '../hooks/useTheme.js'
import { useActiveSection } from '../hooks/useActiveSection.js'

const links = [
  { id: 'sobre-mi', label: 'Sobre mí' },
  { id: 'proyectos', label: 'Proyectos' },
  { id: 'experiencia', label: 'Recorrido' },
  { id: 'contacto', label: 'Contacto' },
].filter((l) => l.id !== 'experiencia' || experience.length > 0)
const sectionIds = links.map((l) => l.id)

export default function Navbar() {
  const { pathname } = useLocation()
  const { theme, toggleTheme } = useTheme()
  const [scrolled, setScrolled] = useState(() => window.scrollY > 24)
  const [open, setOpen] = useState(false)
  const active = useActiveSection(sectionIds, pathname === '/')

  const { scrollY } = useScroll()
  useMotionValueEvent(scrollY, 'change', (y) => setScrolled(y > 24))

  // El menú del celular se cierra con Escape
  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between px-4 transition-all duration-300 sm:px-6 ${
          scrolled || open
            ? 'mt-2 h-14 rounded-2xl border border-line bg-bg/70 backdrop-blur-xl sm:mt-3 sm:w-[calc(100%-2rem)]'
            : 'h-20 border border-transparent'
        }`}
      >
        <Link to="/" className="text-lg font-semibold tracking-tight" onClick={() => setOpen(false)}>
          {profile.shortName}
          <span className="text-accent">.</span>
        </Link>

        <div className="flex items-center gap-1">
          <ul className="hidden items-center gap-1 md:flex">
            {links.map((link) => (
              <li key={link.id}>
                <Link
                  to={`/#${link.id}`}
                  className={`relative isolate rounded-full px-4 py-2 text-sm transition-colors ${
                    active === link.id ? 'text-fg' : 'text-muted hover:text-fg'
                  }`}
                >
                  {active === link.id && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 -z-10 rounded-full bg-fg/[0.07]"
                      transition={{ type: 'spring', stiffness: 400, damping: 35 }}
                    />
                  )}
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <button
            type="button"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
            className="grid size-10 place-items-center rounded-full text-muted transition-colors hover:bg-fg/[0.07] hover:text-fg"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={theme}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
              </motion.span>
            </AnimatePresence>
          </button>

          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={open}
            className="grid size-10 place-items-center rounded-full text-muted hover:bg-fg/[0.07] hover:text-fg md:hidden"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="mx-4 mt-2 rounded-2xl border border-line bg-bg/90 p-2 backdrop-blur-xl md:hidden"
          >
            {links.map((link, i) => (
              <motion.li
                key={link.id}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.04 * i }}
              >
                <Link
                  to={`/#${link.id}`}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-4 py-3 text-muted hover:bg-fg/[0.05] hover:text-fg"
                >
                  {link.label}
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  )
}
