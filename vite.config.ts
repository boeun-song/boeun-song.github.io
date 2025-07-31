import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import glsl from "vite-plugin-glsl";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    glsl({
      include: ["**/*.vert", "**/*.frag", "**/*.glsl"],
      exclude: undefined,
    }),
  ],
  resolve: {
    alias: {
      "~apps": path.resolve(__dirname, "src"),
    },
  },
});
