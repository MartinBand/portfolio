import { useEffect } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'

// Muestra una imagen a pantalla completa. Se cierra con Escape o tocando afuera,
// y con las flechas (del teclado o de la pantalla) pasa a la anterior o la siguiente.
export default function Lightbox({ images, index, onChange, onClose, title }) {
  const open = index !== null
  const total = images.length
  const ir = (paso) => onChange((index + paso + total) % total)

  useEffect(() => {
    if (!open) return
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight' && total > 1) onChange((index + 1) % total)
      if (e.key === 'ArrowLeft' && total > 1) onChange((index - 1 + total) % total)
    }
    const overflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = overflow
      window.removeEventListener('keydown', onKey)
    }
  }, [open, index, total, onChange, onClose])

  const flecha =
    'absolute top-1/2 grid size-11 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20'

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={`${title}, captura ${index + 1} de ${total}`}
          className="fixed inset-0 z-[60] grid place-items-center bg-black/85 p-4 backdrop-blur-sm sm:p-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.img
            key={images[index]}
            src={images[index]}
            alt={`${title}, captura ${index + 1}`}
            className="max-h-full max-w-full rounded-xl shadow-2xl"
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            onClick={(e) => e.stopPropagation()}
          />
          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar"
            className="absolute top-4 right-4 grid size-11 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
          >
            <X size={20} />
          </button>
          {total > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation()
                  ir(-1)
                }}
                aria-label="Captura anterior"
                className={`${flecha} left-3 sm:left-6`}
              >
                <ChevronLeft size={22} />
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation()
                  ir(1)
                }}
                aria-label="Captura siguiente"
                className={`${flecha} right-3 sm:right-6`}
              >
                <ChevronRight size={22} />
              </button>
              <p className="absolute bottom-4 left-1/2 -translate-x-1/2 font-mono text-sm text-white/70">
                {index + 1} / {total}
              </p>
            </>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
