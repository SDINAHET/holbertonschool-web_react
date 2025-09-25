import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Le site sera servi sous /holbertonschool-web_react/
export default defineConfig({
  plugins: [react()],
  base: '/holbertonschool-web_react/'
})
