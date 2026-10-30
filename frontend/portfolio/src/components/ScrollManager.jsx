import { useEffect, useRef } from 'react'
import { useLocation, useNavigationType } from 'react-router'

// Al navegar: con "atrás" vuelve a donde estabas; si hay #hash, baja hasta
// esa sección; si no, vuelve arriba. Depende de `key` para que volver a tocar el mismo
// link (ej. "Proyectos") también haga scroll.
export default function ScrollManager() {
  const { pathname, hash, key } = useLocation()
  const navigationType = useNavigationType()
  const posiciones = useRef({})
  const keyActual = useRef(key)

  // Al hacer clic (antes de que el link cambie de página) guarda en qué posición
  // estaba la página actual, para recuperarla si después se vuelve con "atrás".
  useEffect(() => {
    window.history.scrollRestoration = 'manual'
    const guardar = () => {
      posiciones.current[keyActual.current] = window.scrollY
    }
    document.addEventListener('click', guardar, true)
    return () => document.removeEventListener('click', guardar, true)
  }, [])

  useEffect(() => {
    keyActual.current = key
    const guardada = posiciones.current[key]
    if (navigationType === 'POP' && guardada !== undefined) {
      window.scrollTo({ top: guardada, behavior: 'instant' })
      return
    }
    if (hash) {
      const el = document.getElementById(hash.slice(1))
      if (el) {
        el.scrollIntoView()
        return
      }
    }
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname, hash, key, navigationType])

  return null
}
