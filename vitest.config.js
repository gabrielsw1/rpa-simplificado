import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  test: {
    globals: true,
    environment: 'jsdom',
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: [
        'node_modules/',
        'src/main.js',
        'src/router/index.js',
        'src/assets/',
        'src/**/*.d.ts',
        'src/vite-env.d.ts'
      ],
      all: true,
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80
    },
    include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    exclude: ['node_modules', 'dist', '.idea', '.git', '.cache'],
    mockReset: true,
    restoreMocks: true,
    clearMocks: true,
    maxConcurrency: 5,
    minThreads: 1,
    maxThreads: 4,
    sequence: {
      shuffle: true
    },
    testTimeout: 5000,
    hookTimeout: 5000
  }
}) 