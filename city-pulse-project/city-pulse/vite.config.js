import { resolve } from "path";
import { defineConfig } from "vite";
import replace from '@rollup/plugin-replace';

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
    replace({
      'process.env.VITE_APIKEY': JSON.stringify(process.env.VITE_APIKEY),
      'process.env.VITE_COUNTRY': JSON.stringify(process.env.VITE_COUNTRY),
    }),
  ],
});
