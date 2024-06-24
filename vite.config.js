import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import { path, __dirname } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    test: {
        environment: 'jsdom',
        globals: true,
        setupFiles: './src/tests/setup.js', // assuming the tests folder is in the `src` directory
    },
})
