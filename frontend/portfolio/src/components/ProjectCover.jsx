// Muestra la captura del proyecto o, si no hay, una portada generada con sus colores
export default function ProjectCover({ project }) {
  if (project.image) {
    return <img src={project.image} alt={project.title} decoding="async" className="size-full object-cover" />
  }

  const [from, to] = project.colors
  return (
    <div
      className="relative size-full overflow-hidden"
      style={{ background: `linear-gradient(135deg, ${from}, ${to})` }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(rgb(255_255_255/0.25)_1px,transparent_1px)] bg-[size:16px_16px] opacity-40" />
      <div className="absolute inset-x-[10%] top-[16%] -bottom-[4%] flex flex-col overflow-hidden rounded-t-[3%] border border-white/30 bg-white/90 shadow-2xl dark:bg-zinc-950/85">
        <div className="flex items-center gap-[1.2%] border-b border-black/5 px-[3%] py-[2.4%] dark:border-white/10">
          {['#f87171', '#fbbf24', '#4ade80'].map((c) => (
            <span key={c} className="aspect-square w-[2.2%] rounded-full" style={{ background: c }} />
          ))}
          <span className="ml-[3%] h-[0.55rem] w-1/3 rounded-full bg-black/5 dark:bg-white/10" />
        </div>
        <div className="flex flex-1 gap-[4%] p-[4%]">
          <div className="flex w-1/4 flex-col gap-[8%]">
            {[0, 1, 2, 3].map((i) => (
              <span key={i} className="h-[6%] rounded-full bg-black/[0.07] dark:bg-white/10" />
            ))}
          </div>
          <div className="flex flex-1 flex-col gap-[6%]">
            <span className="h-[12%] w-2/3 rounded-md" style={{ background: from, opacity: 0.85 }} />
            <span className="h-[5%] w-full rounded-full bg-black/[0.07] dark:bg-white/10" />
            <span className="h-[5%] w-5/6 rounded-full bg-black/[0.07] dark:bg-white/10" />
            <div className="grid flex-1 grid-cols-3 gap-[5%]">
              {[0.35, 0.6, 0.85].map((o) => (
                <span key={o} className="rounded-md" style={{ background: to, opacity: o }} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
