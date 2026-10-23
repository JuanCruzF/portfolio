import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://juancruzfucile.com.ar',
  telemetry: false,
  integrations: [tailwind()],
});
