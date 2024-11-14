import createSvgSpritePlugin from 'vite-plugin-svg-sprite';
import postcssImport from 'postcss-import';
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  base: 'radomskaia-JSFE2024Q4/christmas-shop',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        nested: resolve(__dirname, 'gifts/index.html'),
      },
    },
    cssCodeSplit: false,
  },
    css: {
    postcss: {
      plugins: [postcssImport()],
    },},
    plugins: [
    createSvgSpritePlugin({
      symbolId: 'icon-[name]-[hash]',
    }),
  ]})

