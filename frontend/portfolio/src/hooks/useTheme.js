import { useState } from 'react'

export function useTheme() {
  const [theme, setTheme] = useState(() =>
    document.documentElement.classList.contains('dark') ? 'dark' : 'light',
  )

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    document.documentElement.classList.toggle('dark', next === 'dark')
    try {
      localStorage.setItem('theme', next)
    } catch {
      // Sin acceso a localStorage el tema igual cambia, solo no se recuerda
    }
    setTheme(next)
  }

  return { theme, toggleTheme }
}
