# Landing page - Comunicación Pública de la Ciencia

Proyecto web estático listo para abrir en VSCode y desplegar en Netlify.

## Estructura

- `index.html`: estructura principal de la landing page.
- `css/styles.css`: estilos visuales y diseño responsive.
- `js/courses.js`: datos de los 12 cursos tomados de la hoja `Matriz cursos _Micrositio`.
- `js/app.js`: renderizado de tarjetas, filtros por área y enlace de preinscripción.
- `assets/img/`: carpeta para banner e imágenes.
- `assets/logos/`: carpeta para logos institucionales.

## Cómo probar en VSCode

1. Abre la carpeta `cpc_landing_netlify` en VSCode.
2. Instala la extensión **Live Server** si no la tienes.
3. Clic derecho sobre `index.html` y selecciona **Open with Live Server**.

También puedes abrir `index.html` directamente en el navegador.

## Qué debes reemplazar después

1. Banner principal: guarda la imagen oficial como `assets/img/banner.jpg`.
2. Introducción: reemplaza el texto de la sección `Presentación` en `index.html`.
3. Disclaimer: reemplaza el texto de la sección `Información importante` en `index.html`.
4. Formulario: cambia la constante `PREINSCRIPTION_URL` en `js/app.js`.
5. Logos: reemplaza los placeholders del footer por imágenes reales en `index.html`.

## Despliegue en Netlify

Como es un sitio estático, no requiere build.

- Build command: dejar vacío.
- Publish directory: `/` si subes esta carpeta como raíz del sitio.

Si subes el repositorio completo y la landing queda dentro de una subcarpeta, selecciona esa carpeta como directorio de publicación.
