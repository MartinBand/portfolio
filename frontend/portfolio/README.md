# Portfolio — Martín Bandoni

Portfolio personal hecho con React, Vite, Tailwind CSS y Motion.

## Comandos

```bash
npm install      # instalar dependencias
npm run dev      # servidor de desarrollo
npm run build    # versión para publicar (carpeta dist/)
npm run lint     # revisar el código
```

## Editar el contenido

Todo el contenido está en `src/data/`, no hace falta tocar componentes:

- `profile.js`: datos personales, bio, cómo trabajo, herramientas y recorrido.
- `projects.js`: proyectos. Las capturas van en `public/projects/<proyecto>/` (mejor en formato `.webp`).

## Formulario de contacto

Sin configuración, el formulario abre el programa de correo con el mensaje armado.
Para que envíe solo, creá un formulario en Formspree y agregá un archivo `.env` con:

```
VITE_FORM_ENDPOINT=https://formspree.io/f/xxxxxxx
```

## Publicar

El archivo `public/_redirects` hace que en Netlify funcionen las direcciones de cada proyecto
(por ejemplo `/proyectos/fresca`) al recargar la página.
