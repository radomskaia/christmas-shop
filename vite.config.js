import { svgSpritemap } from "vite-plugin-svg-spritemap";
import postcssImport from "postcss-import";
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  base: "./",
  build: {
    sourcemap: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        nested: resolve(__dirname, "gifts/index.html"),
      },
    },
    cssCodeSplit: false,
  },
  css: {
    postcss: {
      plugins: [postcssImport()],
    },
  },
  plugins: [
    svgSpritemap({
      pattern: "assets/icons/*.svg",
    }),
  ],
});
