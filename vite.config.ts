import { fileURLToPath, URL } from "url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    __VUE_OPTIONS_API__: false,
  },
  plugins: [
    vue(),
    vueJsx(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
    assetsDir: "static",
    rollupOptions: {
      output: {
        entryFileNames: `static/js/[name]-[format].js`,
        chunkFileNames: `static/js/[name]-[format].js`,
        assetFileNames: `static/[ext]/[name][extname]`,
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return "vendor"; //代码分割为第三方包
          } else if (id.includes("src/views")) {
            return "views"; //代码分割为业务视图
          }
        },
      },
    },
  },
  server: {
    host: true,
    port: 8000,
    https: true,
  },
});
