import { defineConfig, mergeConfig } from "vite";
import { defineConfig as defineVitestConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default mergeConfig(
  defineConfig({
    plugins: [react()],
    // Garante o base path correto no GitHub Pages (/supermercado-react/)
    base: process.env.NODE_ENV === "production" ? "/supermercado-react/" : "/",
  }),
  defineVitestConfig({
    test: {
      globals: true,
      environment: "jsdom",
      setupFiles: "./src/setupTests.ts",
      include: ["src/**/*.test.{ts,tsx}"],
      exclude: ["node_modules", "dist", "backend", "e2e"],
    },
  }),
);
