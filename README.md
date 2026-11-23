# Raíz Maya – Proyecto Módulo 4

Tienda de plantas y abonos orgánicos. Este módulo agrega eventos del modal con jQuery, estilos con Sass, scripts de NPM y una carpeta lista para producción.

## Estructura
- `index.html`, `productos.html`, `contacto.html`: páginas del sitio.
- `css/styles.scss`: fuente Sass (variables `$amarillo`, `$rojo`, `$verde` y el mixin `caja`).
- `css/styles.css`: salida compilada.
- `js/script.js`: carousel, tooltips, popovers y eventos del modal.
- `dist/`: versión para producción generada con `npm run build`.

## Scripts de NPM
| Comando | Qué hace |
|---|---|
| `npm run scss` | Compila los `.scss` de `css/` y deja el `.css` en la misma carpeta. |
| `npm run watch:scss` | Vuelve a compilar al guardar un `.scss`. |
| `npm start` | Servidor local con recarga y compilación automática. |
| `npm run build` | Limpia `dist/`, compila Sass y copia los archivos de producción. |

## Uso
```bash
npm install
npm run build
```

## Eventos del modal (`js/script.js`)
Se registran en consola `show.bs.modal`, `shown.bs.modal`, `hide.bs.modal` y `hidden.bs.modal`. Al comenzar a abrirse, los botones que abren el modal se inhabilitan y cambian a amarillo. Al terminar de ocultarse, se reactivan y recuperan su color verde.

## Nota sobre Sass
El script `scss` usa `sass` (Dart Sass) en lugar de `node-sass`, porque `node-sass` está descontinuado y no instala en versiones recientes de Node.
