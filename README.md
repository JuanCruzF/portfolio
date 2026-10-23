# astro-portfolio

Portfolio personal de Juan Cruz Fucile, hecho con [Astro](https://astro.build) y Tailwind CSS.

🌐 https://juancruzfucile.com.ar

## Comandos

| Comando           | Acción                                          |
| :---------------- | :---------------------------------------------- |
| `npm install`     | Instala las dependencias                        |
| `npm run dev`     | Servidor de desarrollo en `localhost:4321`      |
| `npm run build`   | Genera el sitio estático en `./dist/`           |
| `npm run preview` | Previsualiza el build localmente                |

## Deploy

Se publica en Cloudflare Workers (static assets). Cada push a `main` dispara un deploy automático.
La configuración está en `wrangler.jsonc`.
