import viteReact from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { deepMerge } from "./src/object/deepMerge";

const OUTPUT_ROOT = "dist";

/** @type {(mode:string) => import("vite").UserConfig} */
const common = (mode) => ({
  build: {
    sourcemap: mode === "development",
    outDir: OUTPUT_ROOT,
  },
  publicDir: "./public",
});

const baseConfig = (base) =>
  defineConfig(({ mode }) => deepMerge(common(mode), base));

export function configureService(name, alias) {
  return baseConfig({
    build: {
      lib: {
        entry: `./src/services/${name}/index.js`,
        name: alias,
        fileName: () => `${name}.js`,
        formats: ["iife"],
      },
      emptyOutDir: false,
    },
  });
}

export function configureView(name) {
  return baseConfig({
    root: `src/views/${name}`,
    base: "./",
    build: {
      rollupOptions: {
        output: {
          dir: `${OUTPUT_ROOT}/${name}`,
        },
      },
    },
    plugins: [
      viteReact({
        plugins: [
          ["@babel/plugin-proposal-class-properties", { loose: false }],
        ],
      }),
    ],
  });
}
