// Para agregar un proyecto, sumá un objeto a esta lista.
// - image: ruta a una captura en /public (ej. '/projects/mi-app.webp'). Si es null se muestra una portada generada con `colors`.
// - gallery: capturas extra para la página de detalle.
export const projects = [
  {
    slug: 'fresca',
    title: 'Fresca',
    summary:
      'Tienda online de merch para un almacén de cerveza artesanal, con panel propio para manejar productos, stock, pedidos y horarios.',
    category: 'Full Stack',
    year: 2026,
    role: 'Diseño y desarrollo',
    image: '/projects/fresca/tienda.webp',
    colors: ['#facc15', '#14b8a6'],
    tags: ['JavaScript', 'Supabase', 'PostgreSQL', 'Google Apps Script', 'Netlify'],
    demoUrl: 'https://fresca-merch.netlify.app',
    repoUrl: 'https://github.com/MartinBand/frescaweb',
    problem:
      'Fresca, un almacén de cerveza artesanal de Mercedes (Buenos Aires), necesitaba vender su merch online, y que el dueño pudiera cargar productos, controlar el stock y seguir los pedidos sin tocar código.',
    solution:
      'Una tienda en HTML, CSS y JavaScript sin frameworks, publicada en Netlify, más un panel de administración conectado a Supabase (base de datos, login y fotos). Un Google Apps Script hace de intermediario: entrega los productos con caché y recibe los pedidos, con copia en Google Sheets.',
    highlights: [
      'Catálogo con filtros por categoría, talle y color, precio de promoción y talles sin stock deshabilitados.',
      'Pedido por WhatsApp con opción de pago por Mercado Pago, y cartel de abierto o cerrado según los horarios.',
      'Panel con stock por talle y color, historial de movimientos y alertas de stock bajo.',
      'Pedidos con estados y notas internas; el stock se descuenta al entregar, todo o nada.',
      'Ventas por período con gráfico por categoría o producto.',
      'Seguridad en la base con Row Level Security; el navegador solo usa la clave pública y la secreta nunca está en el repo.',
    ],
    gallery: [
      '/projects/fresca/panel-ventas.webp',
      '/projects/fresca/panel-productos.webp',
      '/projects/fresca/panel-pedidos.webp',
    ],
  },
  {
    // Herramienta interna: sin nombre, logo ni repo de la entidad. Capturas con datos inventados.
    slug: 'formulario-de-garantias',
    title: 'Formulario Digital de Garantías',
    summary:
      'Aplicación web pensada para reemplazar una planilla de Excel: carga solicitudes de garantía y genera el formulario legal listo para firmar. Prototipo funcional, no publicado.',
    category: 'Frontend',
    year: 2026,
    role: 'Diseño y desarrollo',
    image: '/projects/formulario-de-garantias/carga.webp',
    colors: ['#0ea5e9', '#8b5cf6'],
    tags: ['React', 'Vite', 'Tailwind CSS', 'Vitest'],
    demoUrl: null,
    repoUrl: null,
    problem:
      'En una entidad financiera, los datos de cada cliente que pide una garantía se cargaban en una planilla de Excel compleja, fácil de romper y con errores frecuentes en CUIT, montos y firmantes, que obligaban a rehacer el formulario.',
    solution:
      'Desarrollé un prototipo funcional que guía la carga paso a paso, valida los datos en el momento y arma automáticamente el texto legal con sus espacios de firma, listo para imprimir o guardar como PDF. Funciona sin servidor ni base de datos: los borradores se guardan y se retoman como archivo. Quedó completo, pero no llegó a publicarse.',
    highlights: [
      'Validación real de CUIT/CUIL con el dígito verificador de AFIP.',
      'Firmantes obligatorios según el tipo de sociedad, incluidos los casos especiales.',
      'Carga de distintos tipos de garantía (fianzas, prendas e hipotecas) con resumen automático de cantidades y valores.',
      'Provincia, partido y localidad desde la API pública del Gobierno (Georef), con reintento si falla.',
      'Documento final imprimible generado a partir de los datos cargados, con modo claro y oscuro en la app.',
      '56 tests unitarios sobre las reglas de negocio, más un manual pensado para usuarios no técnicos.',
    ],
    gallery: [
      '/projects/formulario-de-garantias/garantias.webp',
      '/projects/formulario-de-garantias/resumen.webp',
      '/projects/formulario-de-garantias/impresion.webp',
    ],
  },
  {
    // Herramienta interna: sin nombre, logo ni repo de la entidad. Capturas con datos inventados.
    slug: 'gestion-de-operaciones',
    title: 'Gestión de Operaciones con Garantía',
    summary:
      'Aplicación interna para presupuestar operaciones de crédito con garantía, seguir cada una hasta su aprobación y gestionar las tasaciones de los bienes. Prototipo funcional, no publicado.',
    category: 'Full Stack',
    year: 2026,
    role: 'Diseño y desarrollo',
    image: '/projects/gestion-de-operaciones/inicio.webp',
    colors: ['#14b8a6', '#6366f1'],
    tags: ['React', 'Node.js', 'Express', 'Oracle', 'JWT', 'Tailwind CSS'],
    demoUrl: null,
    repoUrl: null,
    problem:
      'Un equipo que tramita operaciones de crédito con garantía prendaria e hipotecaria trabajaba con varias planillas de Excel separadas: una para presupuestar, otra para el seguimiento y otra para las tasaciones. Los datos se cargaban más de una vez y era difícil saber en qué estado estaba cada operación.',
    solution:
      'Desarrollé un prototipo funcional, con API propia en Node y Express, que une todo el circuito en un solo lugar: desde la hoja de trabajo y el presupuesto hasta el seguimiento y las tasaciones. Se conecta en modo solo lectura al sistema central de la empresa para traer los datos que ya existen y evitar cargarlos a mano. Quedó completo, pero no llegó a publicarse.',
    highlights: [
      'Inicio de sesión con JWT y cuatro roles con permisos distintos, controlados en el servidor.',
      'Cálculo automático del presupuesto según la cobertura de garantías de cada bien.',
      'Tabla de seguimiento con autoguardado por campo y exportación a Excel y PDF.',
      'Sincronización con la base Oracle del sistema central, sin escribir nunca en ella.',
      'Circuito de tasaciones por etapas, con un ranking de tasadoras por tiempo, costo y errores.',
      'Listas configurables desde la app, backup desde Configuración y documentación técnica completa.',
    ],
    gallery: [
      '/projects/gestion-de-operaciones/seguimiento.webp',
      '/projects/gestion-de-operaciones/tasaciones.webp',
      '/projects/gestion-de-operaciones/ranking.webp',
      '/projects/gestion-de-operaciones/tasacion.webp',
    ],
  },
  {
    // Herramienta interna: sin nombre, logo ni repo de la entidad. Capturas con datos inventados.
    slug: 'solicitud-en-linea',
    title: 'Solicitud de Garantías en Línea',
    summary:
      'Portal para que una pyme pida una garantía en línea: completa el formulario con datos precargados, sube la documentación y sigue el estado de su solicitud. Prototipo funcional, no publicado.',
    category: 'Full Stack',
    year: 2026,
    role: 'Diseño y desarrollo',
    image: '/projects/solicitud-en-linea/formulario.webp',
    colors: ['#06b6d4', '#7c3aed'],
    tags: ['React', 'Node.js', 'Express', 'Oracle', 'SQLite', 'JWT', 'Tailwind CSS'],
    demoUrl: null,
    repoUrl: null,
    problem:
      'Para pedir una garantía, las empresas completaban a mano un formulario extenso en Excel y mandaban la documentación por correo. Faltaban datos, había idas y vueltas y nadie tenía a la vista en qué estado estaba cada pedido.',
    solution:
      'Desarrollé un prototipo funcional de punta a punta: la pyme se registra, carga su CUIT y completa el formulario por etapas, con datos precargados desde fuentes externas. Del otro lado, las áreas internas reciben las solicitudes en una bandeja, piden aclaraciones y las aprueban o rechazan. Quedó completo, pero no llegó a publicarse.',
    highlights: [
      'Formulario definido como esquema compartido: el frontend lo dibuja y el backend valida con las mismas reglas.',
      'Precarga de datos desde AFIP, LUFE, NOSIS y la Central de Deudores del BCRA, con modo simulado para desarrollo.',
      'Autoguardado mientras se escribe, porcentaje completado por etapa y preguntas que aparecen según las respuestas.',
      'Check list de documentación que cambia según lo cargado, con carga por arrastre y control del contenido real de cada archivo.',
      'Pedidos y respuestas entre la entidad y el cliente, con notificaciones y adjuntos.',
      'Sesión con JWT en cookie httpOnly, roles por área, Oracle en producción y SQLite en desarrollo. Responsive y con modo oscuro.',
    ],
    gallery: [
      '/projects/solicitud-en-linea/socios.webp',
      '/projects/solicitud-en-linea/financiamiento.webp',
      '/projects/solicitud-en-linea/modo-oscuro.webp',
    ],
  },
  {
    // Herramienta interna: sin nombre, logo ni repo de la entidad. Capturas con datos inventados.
    slug: 'revision-de-documentacion',
    title: 'Revisión de Documentación con OCR',
    summary:
      'Aplicación que lee la documentación de una operación de crédito (PDF, Word o escaneos), extrae los datos y los compara contra la base de operaciones. Prototipo funcional, no publicado.',
    category: 'Full Stack',
    year: 2026,
    role: 'Diseño y desarrollo',
    image: '/projects/revision-de-documentacion/resultado.webp',
    colors: ['#0ea5e9', '#ef4444'],
    tags: ['React', 'Node.js', 'Express', 'Tesseract.js (OCR)', 'Oracle', 'Tailwind CSS'],
    demoUrl: null,
    repoUrl: null,
    problem:
      'Después de acreditar un crédito, alguien tenía que revisar a mano que los datos de los documentos firmados (monto, plazo, tasa, CUIT, fechas) coincidieran con lo cargado en el sistema. Era lento y las diferencias se escapaban.',
    solution:
      'Desarrollé un prototipo funcional que lee los documentos con OCR local, extrae cada dato con reglas configurables y lo compara contra la operación en la base, en modo solo lectura. Funciona sin IA y sin internet. Lo que no coincide queda marcado para revisión manual. Quedó completo, pero no llegó a publicarse.',
    highlights: [
      'Lectura de PDF, Word y escaneos, con OCR local (Tesseract) cuando el documento es una imagen.',
      'Comparación campo por campo con su nivel de confianza y el fragmento del documento de donde salió cada dato.',
      'Bandejas de pendientes, revisión manual y verificadas, más revisión en lote de carpetas completas.',
      'Reglas de extracción editables desde la app y versionadas, sin tocar el código.',
      'Informe con las diferencias para el área de sistemas, indicadores de desvíos y exportación a Excel y PDF.',
      'Tres roles con permisos distintos y contraseñas temporales que vencen en 24 horas.',
    ],
    gallery: [
      '/projects/revision-de-documentacion/elegir-operacion.webp',
      '/projects/revision-de-documentacion/bandeja.webp',
      '/projects/revision-de-documentacion/informe.webp',
    ],
  },
  {
    slug: 'supermercado',
    title: 'Supermercado',
    summary:
      'Aplicación web para gestionar el catálogo de un supermercado: productos, precios, stock, tienda online y carrito.',
    category: 'Full Stack',
    year: 2026,
    role: 'Full Stack',
    image: null,
    colors: ['#10b981', '#0ea5e9'],
    tags: ['Node.js', 'Express', 'MongoDB', 'EJS', 'Passport', 'Bootstrap'],
    demoUrl: null,
    repoUrl: 'https://github.com/MartinBand/supermercado',
    problem:
      'Mantener actualizados los precios y el stock de muchos productos es difícil si no queda registro de qué cambió. Hacía falta una herramienta para administrar el catálogo y detectar rápido las variaciones.',
    solution:
      'Una aplicación con Express y MongoDB que guarda el valor anterior y el actual de cada precio y stock. Incluye panel de administración, buscador por SKU, una tienda paginada y carrito de compras, todo protegido con autenticación.',
    highlights: [
      'Registro e inicio de sesión con Passport y contraseñas cifradas.',
      'Recuperación de contraseña por email con token temporal (Nodemailer).',
      'Alta, edición, baja y búsqueda por SKU de productos.',
      'Historial de precio y stock con filtros: sin stock, cambio de precio, repuestos y desactualizados.',
      'Tienda con paginación y carrito guardado en la sesión del usuario.',
    ],
    gallery: [],
  },
  {
    slug: 'wolf-wallet',
    title: 'Wolf Wallet',
    summary: 'Billetera virtual para registrar ingresos y gastos y ver en todo momento cuánto dinero tenés disponible.',
    category: 'Frontend',
    year: 2024,
    role: 'Frontend',
    image: null,
    colors: ['#6366f1', '#06b6d4'],
    tags: ['HTML', 'CSS', 'JavaScript'],
    demoUrl: null,
    repoUrl: 'https://github.com/MartinBand/Billetera-Virtual',
    problem:
      'Llevar el control de los gastos del día a día en papel o en una planilla es incómodo y no deja ver de un vistazo cuánto queda disponible.',
    solution:
      'Una interfaz inspirada en las billeteras virtuales, hecha con JavaScript puro, que calcula los totales automáticamente cada vez que se carga o se borra un movimiento.',
    highlights: [
      'Carga de dinero ingresado y de gastos con concepto y monto.',
      'Cálculo automático del total gastado y del saldo disponible.',
      'Eliminación de gastos con actualización inmediata de los totales.',
      'Validación de los datos ingresados en el formulario.',
      'Panel con menú lateral y tarjetas al estilo de una app bancaria.',
    ],
    gallery: [],
  },
]

export const categories = ['Todos', ...new Set(projects.map((p) => p.category))]
