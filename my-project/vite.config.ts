import {defineConfig, loadEnv} from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({mode}) => {
    const env = loadEnv(mode, process.cwd(), '')
    const PORT = env.VITE_PORT
    return defineConfig({
        plugins: [
            react(),
        ],

        server: {
            host: true,
            port: +PORT || 8080
        },
    });
})
