import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  /* site: 'https://kennoyuusha.github.io', */
  base: process.env.NODE_ENV === "production" ? "to-do-list" : undefined,
});
