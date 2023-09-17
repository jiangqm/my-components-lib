import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

import typescript from "@rollup/plugin-typescript";
function resolve(str: string) {
  return path.resolve(__dirname, str);
}
// https://vitejs.dev/config/
export default defineConfig({
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
        return `yt-${name}`;
      }
    }
  },
  build: {
    // 库模式，设置入口文件和文件名
    lib: {
      entry: "src/components",
      name: "yt-design",
      fileName: "my-components-lib",
      formats: ["es", "umd"]
    },

    rollupOptions: {
      // Externalize dependencies if needed
      external: ["react", "react-dom"],
      output: {
        // 按名称导出
        exports: "named",
        // 指定全局变量映射，这对于在浏览器环境中使用库时很有用。在这里，
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
});
