import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // Use repo name as base on GitHub Pages (production), "/" in dev
  base: mode === "production" ? "/trueyou-mastery-coach/" : "/",
  server: { host: "::", port: 8080 },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: { "@": path.resolve(__dirname, "./src") },
  },
  build: {
    outDir: "dist",
    target: "es2018",
    sourcemap: false,
    minify: "esbuild",
    emptyOutDir: true,
  },
}));
