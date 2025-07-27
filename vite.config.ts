// vite.config.ts
/// <reference types="vitest/config" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import dts from 'vite-plugin-dts';
import { resolve } from 'path'; // Já está no seu código

import path from 'node:path'; // Já está no seu código
import { fileURLToPath } from 'node:url'; // Já está no seu código
// import { storybookTest } from '@storybook/addon-vitest/vitest-plugin'; // Comentei para focar no build, se precisar descomente

const dirname = typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url));

const LIB_NAME = 'meiyo-react-components';

export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
      // --- ADICIONE OU AJUSTE ESTAS LINHAS ---
      // 1. Explicitamente aponte para o tsconfig.app.json
      tsconfigPath: './tsconfig.app.json', // <-- Garante que o dts use esta config para os tipos
      // 2. Opcional: Especifique o diretório de saída dos tipos (geralmente 'dist')
      outDir: 'dist',
      // 3. Se ainda tiver problemas, tente rollupTypes: true (pode gerar um único .d.ts)
      // rollupTypes: true,
      // ------------------------------------
    })
  ],
  build: {
    lib: {
      entry: resolve(dirname, 'src/index.ts'),
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
  // Seu objeto 'test' aqui, se precisar
  // test: { ... }
});