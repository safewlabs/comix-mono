import { defineConfig } from 'vite'
import path from "path";
import RubyPlugin from 'vite-plugin-ruby'
import FullReload from 'vite-plugin-full-reload'

export default defineConfig({
  resolve: {
    alias: {
      "@views": path.resolve(__dirname, "app/views"),
      "@javascript": path.resolve(__dirname, "app/javascript"),
    },
  },
  plugins: [
    RubyPlugin(),
    FullReload(['config/routes.rb', 'app/views/**/*']),
  ],
})
