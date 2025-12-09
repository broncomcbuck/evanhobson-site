import { defineConfig } from 'astro/config';
import tailwind from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://evanhobson.com',
  vite: {
    plugins: [tailwind()]
  }
});
