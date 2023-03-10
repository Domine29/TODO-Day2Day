/* eslint-disable import/no-extraneous-dependencies */
/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/static/',
  build: {
    // this is the folder where vite will generate its output. Make sure django can serve files from here!
    outDir: '../backend/static',

    // delete the old build when creating the new build.
    // this is the default behavior, unless outDir is outside of the current directory
    emptyOutDir: true,
    sourcemap: true,
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/setupTests.ts'],
  },
});
