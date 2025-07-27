/// <reference types="vitest/config" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc'; 
import dts from 'vite-plugin-dts'; 
import { resolve } from 'path'; 

import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';

const dirname = typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url));

const LIB_NAME = 'meiyo-react-components'; 

export default defineConfig({
  plugins: [
    react(),
    dts({ 
      insertTypesEntry: true, 
    })
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'), 
      name: LIB_NAME.replace(/-/g, ''), 
      fileName: (format) => `${LIB_NAME}.${format}.js`, 
      formats: ['es', 'umd'], 
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
  test: {
    projects: [{
      extends: true,
      plugins: [
        storybookTest({
          configDir: path.join(dirname, '.storybook')
        })
      ],
      test: {
        name: 'storybook',
        browser: {
          enabled: true,
          headless: true,
          provider: 'playwright',
          instances: [{
            browser: 'chromium'
          }]
        },
        setupFiles: ['.storybook/vitest.setup.ts']
      }
    }]
  }
});