import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
    plugins: [
        react(),
        federation({
            name: 'main-app', // name of the fed group...
            filename: 'remoteEntry.js', // default file name
            remotes: {
                app2: "http://localhost:5002/assets/remoteEntry.js",
            },
            shared: ['react', 'react-dom', 'react-router-dom'] // libs/deps to be shared
        })
    ],
    build: {
        modulePreload: false,
        target: 'esnext', // needed to final build
        minify: false,
        cssCodeSplit: false
    },
})
