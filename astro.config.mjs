import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp',
    },
  },
  vite: {
    build: {
      cssMinify: true,
      rollupOptions: {
        output: {
          manualChunks: {
            gsap: ['gsap'],
          },
        },
      },
    },
  },
});
