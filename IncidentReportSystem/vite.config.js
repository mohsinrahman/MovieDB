import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],

  server: {
    publicDir: false,
    host: "0.0.0.0",
    port: 5173,
    strictPort: true,

    // ✅ Add this proxy section:
    proxy: {
      "/api": {
        target: "http://localhost:5000", // 👈 your backend server URL
        changeOrigin: true,
        secure: false,
      },
    },
  },

  preview: {
    host: "0.0.0.0",
    port: 4173,
    strictPort: true,
    allowedHosts: [".fly.dev", "localhost", "127.0.0.1"],
  },

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  build: {
    outDir: "dist",
  },

  test: {
    projects: [
      {
        name: "app",
        globals: true,
        environment: "jsdom",
      },
      {
        name: "storybook",
        globals: true,
        environment: "jsdom",
      },
    ],
  },
});

/* import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],

  server: {
    publicDir: false,
    host: "0.0.0.0",
    port: 5173,
    strictPort: true,
  },

  preview: {
    host: "0.0.0.0",
    port: 4173,
    strictPort: true,
    allowedHosts: [".fly.dev", "localhost", "127.0.0.1"],
  },

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  build: {
    outDir: "dist",
  },

  test: {
    projects: [
      {
        name: "app",
        globals: true,
        environment: "jsdom",
        // add other test configs if needed
      },
      {
        name: "storybook",
        globals: true,
        environment: "jsdom",
        // storybook-specific test config
      },
    ],
  },
});
 */
