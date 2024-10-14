import { vitePlugin as remix } from "@remix-run/dev"
import { defineConfig } from "vite"
import tsconfigPaths from "vite-tsconfig-paths"
import unocss from "@unocss/postcss"
import autoprefixer from "autoprefixer"

export default defineConfig({
  plugins: [remix(), tsconfigPaths()],
  server: {
    port: 3000,
  },
  css: {
    postcss: {
      plugins: [unocss(), autoprefixer],
    },
  },
})
