/** Rutas de `public/` respetando `base` de Vite (p. ej. GitHub Pages en subcarpeta). */
export function publicUrl(path: string): string {
  const base = import.meta.env.BASE_URL
  const p = path.replace(/^\//, '')
  return `${base}${p}`
}
