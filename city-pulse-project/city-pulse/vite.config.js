import { resolve } from "path";
import { defineConfig } from "vite";
import envCompatible from "vite-plugin-env-compatible";

export default defineConfig({
  root: "src/",

  build: {
    outDir: "../dist",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        
      },
    },
  },
  envPrefix: "VITE_",
  plugins: [
    envCompatible
  ]
});
