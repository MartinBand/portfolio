import {
  SiBootstrap,
  SiCss,
  SiExpress,
  SiGit,
  SiGithub,
  SiGoogleappsscript,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiNetlify,
  SiNodedotjs,
  SiReact,
  SiSqlite,
  SiSupabase,
  SiTailwindcss,
  SiVite,
} from 'react-icons/si'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa6'
import { Database, ScanText } from 'lucide-react'
import { projects } from './projects.js'

// Todo el contenido personal vive acá: editá estos datos y el sitio se actualiza solo.
export const profile = {
  name: 'Martín Bandoni',
  shortName: 'Martín',
  role: 'Desarrollador Web',
  location: 'Argentina',
  tagline:
    'Entiendo qué necesita tu negocio, busco la mejor solución y la convierto en una web real, lista para usar.',
  rotatingWords: ['tiendas online', 'paneles de gestión', 'sitios para negocios', 'herramientas a medida'],
  email: 'martinbandoni@hotmail.com',
  github: 'https://github.com/MartinBand',
  linkedin: 'https://www.linkedin.com/in/martinbandoni',
  // Poné el PDF en /public (por ejemplo /public/cv.pdf) y escribí '/cv.pdf'
  cvUrl: null,
  // Poné tu foto en /public (por ejemplo /public/foto.jpg) y escribí '/foto.jpg'
  photo: '/foto-perfil.jpg',
  about: [
    'Vengo de la Ingeniería Química y hace más de 15 años trabajo en FOGABA, donde hoy soy jefe de departamento. Mi trabajo de todos los días es entender cómo funciona un proceso, encontrar dónde se traba y diseñar herramientas para mejorarlo.',
    'Hago lo mismo cuando desarrollo: antes de escribir una línea de código, me siento a entender cómo trabaja el cliente, qué le hace perder tiempo y qué necesita de verdad.',
    'Con eso claro, busco la solución más simple que funcione y la llevo a producción. Uso la IA como herramienta de desarrollo para construir más rápido, y cada proyecto me sirve para aprender algo nuevo.',
  ],
  stats: [
    { value: '1', label: 'año desarrollando' },
    { value: String(projects.length), label: 'proyectos realizados' },
  ],
  process: [
    {
      title: 'Entender la necesidad',
      description: 'Escucho al cliente y entiendo su negocio: qué hace hoy, qué le cuesta y qué quiere lograr.',
    },
    {
      title: 'Buscar la solución',
      description: 'Elijo las herramientas y el enfoque más simple que resuelva el problema y se pueda mantener.',
    },
    {
      title: 'Plasmarlo',
      description: 'Lo diseño, lo construyo y lo publico. Después lo ajusto con el uso real hasta que funciona como tiene que funcionar.',
    },
  ],
}

// Redes que se muestran en el inicio, en Contacto y en el pie
export const socials = [
  { label: 'GitHub', href: profile.github, icon: FaGithub },
  { label: 'LinkedIn', href: profile.linkedin, icon: FaLinkedinIn },
]

export const stack = [
  {
    group: 'Frontend',
    items: [
      { name: 'HTML', icon: SiHtml5 },
      { name: 'CSS', icon: SiCss },
      { name: 'JavaScript', icon: SiJavascript },
      { name: 'React', icon: SiReact },
      { name: 'Tailwind CSS', icon: SiTailwindcss },
      { name: 'Bootstrap', icon: SiBootstrap },
    ],
  },
  {
    group: 'Backend y datos',
    items: [
      { name: 'Node.js', icon: SiNodedotjs },
      { name: 'Express', icon: SiExpress },
      { name: 'Oracle', icon: Database },
      { name: 'SQLite', icon: SiSqlite },
      { name: 'MongoDB', icon: SiMongodb },
      { name: 'Supabase', icon: SiSupabase },
      { name: 'Apps Script', icon: SiGoogleappsscript },
    ],
  },
  {
    group: 'Herramientas',
    items: [
      { name: 'Git', icon: SiGit },
      { name: 'GitHub', icon: SiGithub },
      { name: 'Vite', icon: SiVite },
      { name: 'Netlify', icon: SiNetlify },
      { name: 'OCR (Tesseract)', icon: ScanText },
    ],
  },
]

// Trabajos, estudios y cursos, del más reciente al más antiguo.
// Mientras la lista esté vacía, la sección no se muestra.
// Formato: { type: 'work' | 'education' | 'course', title, place, period, description }
export const experience = [
  {
    type: 'work',
    title: 'Jefe de Departamento',
    place: 'FOGABA (Fondo de Garantías de Buenos Aires)',
    period: '2008 — Actualidad',
    description:
      'Entré como formalizador, pasé a coordinador y hoy conduzco el departamento y su equipo. Diseño herramientas y procedimientos para mejorar la calidad y la eficiencia del sector, armo indicadores de gestión y me reúno con Gerencia para detectar problemas y definir soluciones.',
  },
  {
    type: 'course',
    title: 'Desarrollador Full Stack',
    place: 'UTN, Centro de e-Learning',
    period: '2025',
    description: 'Cursado completo de los contenidos, sin certificación.',
  },
  {
    type: 'course',
    title: 'Introducción a Bases de Datos y SQL',
    place: 'EducaciónIT',
    period: '2023',
    description: 'Certificado de aprobación (18 horas).',
  },
  {
    type: 'education',
    title: 'Ingeniería Química',
    place: 'UTN FRBA',
    period: '2004 — 2019',
    description:
      'Cursada completa hasta 5.º año, con todas las materias y el Proyecto Final aprobados. Me quedan 5 exámenes finales y el final del Proyecto Final para el título.',
  },
]
