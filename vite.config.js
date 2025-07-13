import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    tailwindcss(),
  ],
  theme: {
  extend: {
    transitionProperty: {
      'spacing': 'margin, padding',
    },
    animation: {
      'ping-slow': 'ping 2.5s cubic-bezier(0, 0, 0.2, 1) infinite',
    },
  },
}

})
