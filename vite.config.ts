/// <reference types="vitest" />

import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

import typescript from "@rollup/plugin-typescript";
function resolve(str: string) {
  return path.resolve(__dirname, str);
}
// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    plugins: [
      react(),
      typescript({
        target: "es5",
        rootDir: resolve("src/components"),
        declaration: true,
        declarationDir: resolve("dist/types"),
        exclude: resolve("node_modules/**"),
        allowSyntheticDefaultImports: true
      })
    ],
    css: {
      // 样式加前缀
      modules: {
        generateScopedName: name => {
          const env = loadEnv(mode, process.cwd(), "");
          if (env.VITE_APP_ENV_TYPE === "DEV") {
            return name;
          }
          return `yt-${name}`;
        }
      }
    },
    test: {
      // 启用类似 jest 的全局测试 API
      globals: true,
      // 测试前的初始化操作
      setupFiles: "./src/test/setup.ts",
      // 使用 jsdom 模拟 DOM
      environment: "jsdom",
      // 覆盖率测试工具
      coverage: {
        provider: "istanbul"
      }
    },
    build: {
      // 库模式，设置入口文件和文件名
      lib: {
        entry: "src/components/index.ts",
        name: "yt-design",
        fileName: "my-components-lib",
        formats: ["es", "umd"]
      },

      rollupOptions: {
        // Externalize dependencies if needed
        external: ["react", "react-dom"],
        input: "src/components/index.ts",
        output: {
          // 按名称导出
          exports: "named",
          // 指定全局变量映射
          globals: {
            react: "React",
            "react-dom": "ReactDOM"
          }
          // 指定每个输出文件的名称。[name] 将被替换为文件名。
          // entryFileNames: "[name].js",
        }
      },
      outDir: "dist"
    }
  };
});
