import { motion } from 'motion/react'
import { EASE } from '../lib/motion.js'

// Aparece con un fundido hacia arriba la primera vez que entra en pantalla
export default function Reveal({ children, delay = 0, y = 24, className }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  )
}
