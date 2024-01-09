import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
    plugins: [
        react(),
        federation({
            name: 'app-2',
            exposes: {
                './Home': './src/Home.jsx',
            },
            shared: ['react', 'react-dom', 'react-router-dom'],
            transformFileTypes: [".svg"]
        })
    ],
    build: {
        modulePreload: false,
        target: 'esnext', // needed to final build
        minify: false, 
        cssCodeSplit: false
      },
})
