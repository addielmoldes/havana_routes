import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react-swc'
import {defineConfig, loadEnv} from 'vite'


// https://vite.dev/config/
export default defineConfig((config) => {
        const env = loadEnv(config.mode, process.cwd());
        return {
            plugins: [react(), tailwindcss()],
            resolve: {
                alias: {
                    '@': path.resolve(__dirname, './src'),
                }
            },
            server: {
                allowedHosts: true,
                proxy: {
                    '/api/taxi/auth': {
                        target: env.VITE_TAXI_AUTH_URL,
                        changeOrigin: true,
                        secure: false,
                        rewrite: path => path.replace('api/taxi/auth', ''),
                    },
                    '/api/taxis': {
                        target: env.VITE_TAXI_URL,
                        changeOrigin: true,
                        secure: false,
                        rewrite: path => path.replace('api/taxis', ''),
                    },
                    '/api/buses': {
                        target: env.VITE_BUS_URL,
                        changeOrigin: true,
                        secure: false,
                        rewrite: path => path.replace('api/buses', ''),
                    }
                }
            }
        }
    }
)
