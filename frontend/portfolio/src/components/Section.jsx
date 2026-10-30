import Reveal from './Reveal.jsx'

export default function Section({ id, eyebrow, title, children }) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-4 py-24 sm:px-6 md:py-32">
      <Reveal className="mb-12 md:mb-16">
        <p className="mb-3 font-mono text-sm text-accent">{eyebrow}</p>
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
      </Reveal>
      {children}
    </section>
  )
}
