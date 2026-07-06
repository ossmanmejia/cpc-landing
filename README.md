# Landing page CPC - Catálogo de cursos

Proyecto web estático listo para abrir en VSCode y desplegar en Netlify.

## Estructura

```txt
.
├── index.html
├── netlify.toml
├── css/
│   └── styles.css
├── js/
│   ├── app.js
│   └── courses.js
└── assets/
    ├── img/
    └── logos/
```

## Cómo verlo localmente

Abre la carpeta en VSCode y usa la extensión **Live Server** sobre `index.html`.

## Ajustes principales de esta versión

- Se eliminó el banner principal.
- Se creó un hero moderno integrado al contenido.
- Paleta basada en `#FFE5D2` y `#98BCA5`.
- Títulos en Arial Black y textos en Arial.
- Sección “¿Cómo acceder?” con tres pasos.
- Catálogo de 8 cursos desde `js/courses.js`.
- CTA final con enlace externo a la plataforma de formación EAFIT.
- Footer con marcadores para logos institucionales.

## Enlace de registro

```txt
https://formacion.eafit.edu.co/cursos/4
```

## Pendientes por reemplazar

- En la sección `#tutorial`, reemplazar el marcador por el video o enlace oficial.
- En el footer, reemplazar los textos por logos reales cuando estén disponibles.

## Despliegue en Netlify

Al conectar el repositorio en Netlify:

```txt
Build command: dejar vacío
Publish directory: .
```
