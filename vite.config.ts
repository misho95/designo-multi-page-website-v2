import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import viteCompression from "vite-plugin-compression";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteCompression({
      // You can customize the options here
      // The default algorithm is gzip
      algorithm: "gzip",
      ext: ".gz",
      // Optionally, enable brotli compression
      // algorithm: 'brotliCompress',
      // ext: '.br',
    }),
  ],
});
