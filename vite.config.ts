import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // host: '192.168.13.202', 
    port: 5173, // The port you want the server to run on
  },
})
