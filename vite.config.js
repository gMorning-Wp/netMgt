import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { viteMockServe } from "vite-plugin-mock";
import path from "path";

// https://vitejs.dev/config/

export default ({ command }) => {
  let prodMock = true;
  return {
    css: {},
    esbuild: {},
    resolve:{
      alias: {
        "@": path.resolve(__dirname, "src"),
        comps: path.resolve(__dirname, "src/components"),
        apis: path.resolve(__dirname, "src/apis"),
        utils: path.resolve(__dirname, "src/utils"),
        routes: path.resolve(__dirname, "src/routes"),
        styles: path.resolve(__dirname, "src/styles"),
        plugins: path.resolve(__dirname, "src/plugins"),
      },
    },
    plugins: [
      vue(),
      viteMockServe({
        // close support .ts file
        supportTs: false,
        // default
        mockPath: 'mock',
        localEnabled: command === 'serve',
        prodEnabled: command !== 'serve' && prodMock,
        injectCode: `
          import { setupProdMockServer } from './mockProdServer';
          setupProdMockServer();
        `,
      }),
    ],
  };
};