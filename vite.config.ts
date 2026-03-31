import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// GitHub Pages sirve el sitio en /Presentacion-Arduino/ (ver package.json "homepage").
// Sin base correcto, los JS/CSS quedan como /assets/... y dan 404 en la raíz del dominio.
export default defineConfig(({ command }) => ({
  base: command === 'serve' ? '/' : '/Presentacion-Arduino/',
  plugins: [react()],
}))
