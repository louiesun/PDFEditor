import {defineConfig} from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',

  clearScreen: false,
  envPrefix: ["VITE_"],
  build: {
    outDir: '../web/',
    emptyOutDir: true,
  },
  server: {
	port: 5188
  },
});
