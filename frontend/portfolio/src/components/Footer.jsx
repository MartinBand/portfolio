import { ArrowUp } from 'lucide-react'
import SocialLinks from './SocialLinks.jsx'
import { profile } from '../data/profile.js'

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 text-sm text-muted sm:flex-row sm:px-6">
        <p>
          © {new Date().getFullYear()} {profile.name}. Hecho con React y Tailwind.
        </p>
        <div className="flex items-center gap-1">
          <SocialLinks
            iconSize={16}
            linkClassName="grid size-9 place-items-center rounded-full hover:bg-fg/[0.07] hover:text-fg"
          />
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0 })}
            aria-label="Volver arriba"
            className="ml-2 grid size-9 place-items-center rounded-full border border-line hover:border-accent/50 hover:text-accent"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  )
}
