import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import devtools from "solid-devtools/vite";

export default defineConfig({
  plugins: [
    /* 
    Uncomment the following line to enable solid-devtools.
    For more info see https://github.com/thetarnav/solid-devtools/tree/main/packages/extension#readme
    */
    devtools({
      autoname: true,
      locator: {
        componentLocation: true,
        targetIDE: "vscode",
        jsxLocation: true,
      },
    }),
    solidPlugin(),
  ],
  server: {
    port: 3000,
    open: true,
  },
  build: {
    target: "esnext",
  },
});
