import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  base: "/react_Portfolio/",
  plugins: [react(), tailwindcss()],
  server: {
    host: '0.0.0.0', 
    port: 5173,
    allowedHosts: ['8417-2409-40c2-6010-2731-b106-f1c2-2d21-8f6.ngrok-free.app'], // Update the new domain here
  },
});
