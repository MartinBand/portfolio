import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { CircleCheck, LoaderCircle, Mail, Send } from 'lucide-react'
import Section from '../components/Section.jsx'
import Reveal from '../components/Reveal.jsx'
import { experience, profile, socials } from '../data/profile.js'

// Si definís VITE_FORM_ENDPOINT (ej. un formulario de Formspree) en un archivo .env,
// los mensajes se envían ahí. Si no, se abre el cliente de correo con el mensaje armado.
const FORM_ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT

const inputClass =
  'w-full rounded-xl border border-line bg-bg/60 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted/60 focus:border-accent focus:ring-4 focus:ring-accent/15'

export default function Contact() {
  const [status, setStatus] = useState('idle')

  async function handleSubmit(e) {
    e.preventDefault()
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form))

    if (!FORM_ENDPOINT) {
      const subject = encodeURIComponent(`Contacto desde el portfolio — ${data.name}`)
      const body = encodeURIComponent(`${data.message}\n\n${data.name} (${data.email})`)
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
      return
    }

    setStatus('sending')
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error(res.statusText)
      form.reset()
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  const directLinks = [{ href: `mailto:${profile.email}`, label: profile.email, icon: Mail }, ...socials]

  return (
    <Section id="contacto" eyebrow={`${experience.length > 0 ? '04' : '03'} — Contacto`} title="Hablemos">
      <div className="grid gap-12 md:grid-cols-[1fr_1.3fr]">
        <Reveal>
          <p className="text-lg leading-relaxed text-muted">
            ¿Tenés un proyecto en mente, una propuesta laboral o simplemente querés saludar? Escribime y te respondo a
            la brevedad.
          </p>
          <ul className="mt-8 space-y-3">
            {directLinks.map(({ href, label, icon: Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target={href.startsWith('mailto:') ? undefined : '_blank'}
                  rel="noreferrer"
                  className="group inline-flex items-center gap-3 text-muted transition-colors hover:text-fg"
                >
                  <span className="grid size-10 place-items-center rounded-full border border-line transition-colors group-hover:border-accent/50 group-hover:text-accent">
                    <Icon size={16} />
                  </span>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.1}>
          <form onSubmit={handleSubmit} className="space-y-4 rounded-2xl border border-line bg-card/60 p-6 sm:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block space-y-2">
                <span className="text-sm text-muted">Nombre</span>
                <input name="name" required autoComplete="name" placeholder="Tu nombre" className={inputClass} />
              </label>
              <label className="block space-y-2">
                <span className="text-sm text-muted">Email</span>
                <input
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="tu@email.com"
                  className={inputClass}
                />
              </label>
            </div>
            <label className="block space-y-2">
              <span className="text-sm text-muted">Mensaje</span>
              <textarea
                name="message"
                required
                rows={5}
                placeholder="Contame en qué estás pensando…"
                className={`${inputClass} resize-none`}
              />
            </label>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                type="submit"
                disabled={status === 'sending'}
                className="btn-primary disabled:opacity-60 disabled:hover:scale-100"
              >
                {status === 'sending' ? (
                  <LoaderCircle size={16} className="animate-spin" />
                ) : (
                  <Send size={16} />
                )}
                {status === 'sending' ? 'Enviando…' : 'Enviar mensaje'}
              </button>

              <AnimatePresence mode="wait">
                {status === 'success' && (
                  <motion.p
                    key="success"
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0 }}
                    role="status"
                    className="inline-flex items-center gap-2 text-sm text-emerald-500"
                  >
                    <CircleCheck size={16} /> ¡Gracias! Te respondo pronto.
                  </motion.p>
                )}
                {status === 'error' && (
                  <motion.p
                    key="error"
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0 }}
                    role="alert"
                    className="text-sm text-red-500"
                  >
                    No se pudo enviar. Probá escribiéndome por email.
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          </form>
        </Reveal>
      </div>
    </Section>
  )
}
