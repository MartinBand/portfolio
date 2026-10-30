import { socials } from '../data/profile.js'

// Íconos de GitHub y LinkedIn; el tamaño y el estilo los define quien lo usa
export default function SocialLinks({ iconSize = 20, linkClassName }) {
  return socials.map(({ label, href, icon: Icon }) => (
    <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} className={linkClassName}>
      <Icon size={iconSize} />
    </a>
  ))
}
