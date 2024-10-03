import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // Example alias for src directory
      "@components": path.resolve(__dirname, "src/components"), // Alias for components
      "@utils": path.resolve(__dirname, "src/utils"), // Alias for utilities
    },
  },
});
