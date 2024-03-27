import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ["**/*.JPG"],

  build: {
    outDir: "dist", // Directorio de salida de la compilación
    assetsInlineLimit: 0,
    rollupOptions: {
      input: "index.html",
    },
    // Copiar el archivo _redirects al directorio de salida
    copy: [
      {
        src: "_redirects",
        dest: "dist",
      },
    ],
  },
});
