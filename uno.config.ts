import { defineConfig, presetWind } from "unocss"

export default defineConfig({
  presets: [presetWind()],
  content: {
    filesystem: ["./app/**/**/*.{ts,tsx}"],
  },
  variants: [
    (matcher) => {
      if (!matcher.startsWith("noscript:")) return matcher
      return {
        matcher: matcher.slice(9),
        layer: "noscript",
      }
    },
  ],
})
