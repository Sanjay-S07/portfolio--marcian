import { defineConfig, Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { createServer } from "./server";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  root: "./client",
  server: {
    host: "::",
    port: 8080,
    fs: {
      allow: [
        path.resolve(__dirname, "client"),
        path.resolve(__dirname, "shared"),
      ],
    },
  },
  build: {
    outDir: "../dist/spa",
  },
  plugins: [react(), expressPlugin()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./client"),
      "@shared": path.resolve(__dirname, "./shared"),
    },
  },
}));

function expressPlugin(): Plugin {
  return {
    name: "express-plugin",
    apply: "serve", // Only apply during development (serve mode)
    configureServer(server) {
      const app = createServer();

      // Add Express app as middleware, but only for /api routes
      // For other routes, Vite will serve the React SPA
      server.middlewares.use((req, res, next) => {
        // Only handle /api routes with Express
        if (req.url && req.url.startsWith("/api")) {
          app(req, res, next);
        } else {
          // Let Vite handle all non-API routes (React SPA)
          next();
        }
      });
    },
  };
}
