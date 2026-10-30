import { useEffect, useState } from 'react'

// Devuelve el id de la sección que ocupa el centro de la pantalla
export function useActiveSection(ids, enabled = true) {
  const [active, setActive] = useState(null)

  useEffect(() => {
    if (!enabled) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-45% 0px -55% 0px' },
    )
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [ids, enabled])

  return enabled ? active : null
}
