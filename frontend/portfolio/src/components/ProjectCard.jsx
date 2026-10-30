import { Link } from 'react-router'
import { ArrowUpRight } from 'lucide-react'
import ProjectCover from './ProjectCover.jsx'

export default function ProjectCard({ project }) {
  return (
    <Link
      to={`/proyectos/${project.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-card/60 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_20px_50px_-20px] hover:shadow-accent/40"
    >
      <div className="aspect-[16/10] overflow-hidden">
        <div className="size-full transition-transform duration-500 ease-out group-hover:scale-105">
          <ProjectCover project={project} />
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center justify-between gap-2 font-mono text-xs text-muted">
          <span>{project.category}</span>
          <span>{project.year}</span>
        </div>
        <h3 className="mt-2 text-lg font-semibold">{project.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{project.summary}</p>

        <ul className="mt-4 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <li key={tag} className="rounded-full border border-line px-2.5 py-0.5 text-xs text-muted">
              {tag}
            </li>
          ))}
        </ul>

        <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-accent">
          Ver más
          <ArrowUpRight
            size={16}
            className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </span>
      </div>
    </Link>
  )
}
