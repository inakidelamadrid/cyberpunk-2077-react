import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [
    react(),
    dts({
      tsconfigPath: "./tsconfig.app.json",
      include: ["lib/**/*"],
      exclude: ["**/*.test.*", "**/*.spec.*"],
      entryRoot: "lib",
      outDir: "dist",
      insertTypesEntry: true,
      copyDtsFiles: true,
      staticImport: true,
    }),
  ],
  build: {
    copyPublicDir: false,
    rollupOptions: {
      external: ["react", "react/jsx-runtime"],
    },
    lib: {
      fileName: "cyberpunk-2077-lib",
      entry: resolve(__dirname, "lib/main.ts"),
      formats: ["es"],
    },
    cssCodeSplit: false,
  },
});
