import { MapPin } from 'lucide-react'
import Section from '../components/Section.jsx'
import Reveal from '../components/Reveal.jsx'
import { profile, stack } from '../data/profile.js'

function Avatar() {
  const initials = profile.name
    .split(' ')
    .map((w) => w[0])
    .join('')
  return (
    <div className="relative mx-auto aspect-[4/5] w-full max-w-xs">
      <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-accent/40 to-accent-2/40 blur-2xl" />
      <div className="relative grid size-full place-items-center overflow-hidden rounded-[1.75rem] border border-line bg-card">
        {profile.photo ? (
          <img src={profile.photo} alt={profile.name} className="size-full object-cover" />
        ) : (
          <span className="text-gradient text-7xl font-semibold">{initials}</span>
        )}
      </div>
    </div>
  )
}

export default function About() {
  return (
    <Section id="sobre-mi" eyebrow="01 — Sobre mí" title="Un poco de mí">
      <div className="grid items-center gap-12 md:grid-cols-[1fr_1.4fr] md:gap-16">
        <Reveal>
          <Avatar />
        </Reveal>

        <div>
          <Reveal delay={0.1} className="space-y-4 text-lg leading-relaxed text-muted">
            {profile.about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <p className="flex items-center gap-2 text-base">
              <MapPin size={16} className="text-accent" /> {profile.location}
            </p>
          </Reveal>

          <Reveal delay={0.2} className="mt-10 grid max-w-md grid-cols-2 gap-4">
            {profile.stats.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-line bg-card/60 p-4">
                <p className="text-2xl font-semibold sm:text-3xl">{stat.value}</p>
                <p className="mt-1 text-xs text-muted sm:text-sm">{stat.label}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </div>

      <Reveal className="mt-24 mb-8">
        <h3 className="text-2xl font-semibold tracking-tight">Cómo trabajo</h3>
      </Reveal>
      <div className="grid gap-6 md:grid-cols-3">
        {profile.process.map((step, i) => (
          <Reveal key={step.title} delay={i * 0.1} className="relative rounded-2xl border border-line bg-card/60 p-6">
            <span className="text-gradient font-mono text-sm font-medium">0{i + 1}</span>
            <h4 className="mt-3 text-lg font-semibold">{step.title}</h4>
            <p className="mt-2 leading-relaxed text-muted">{step.description}</p>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-24 mb-8">
        <h3 className="text-2xl font-semibold tracking-tight">Herramientas que uso</h3>
      </Reveal>
      <div className="grid gap-6 md:grid-cols-3">
        {stack.map((group, i) => (
          <Reveal key={group.group} delay={i * 0.1} className="rounded-2xl border border-line bg-card/60 p-6">
            <h4 className="mb-4 font-mono text-sm text-muted">{group.group}</h4>
            <ul className="grid grid-cols-2 gap-3">
              {group.items.map(({ name, icon: Icon }) => (
                <li
                  key={name}
                  className="group flex items-center gap-2.5 rounded-xl px-2 py-2 text-sm transition-colors hover:bg-fg/[0.05]"
                >
                  <Icon size={18} className="text-muted transition-colors group-hover:text-accent" />
                  {name}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
