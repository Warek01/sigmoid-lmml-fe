import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  base: '/sigmoid-ctf-map-poc/',
  plugins: [tailwindcss(), tsconfigPaths()],
})
