import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },

  build: {
    rollupOptions: {
      plugins: [
        {
          name: 'replace-imports',
          resolveId(id) {
            if (id.endsWith('.jpeg')) {
              return { id: `path/to/your/placeholder-image.jpeg`, external: true };
            }
            return null;
          },
        },
      ],
    },
  },
})
