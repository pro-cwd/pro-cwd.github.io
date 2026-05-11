import { defineConfig } from "vite";
import dotenv from "dotenv";

dotenv.config(); // load env vars from .env

export default defineConfig({
  root: "src/",

  build: {
    outDir: "../dist",
    rollupOptions: {},
  },
  define: {},
});
