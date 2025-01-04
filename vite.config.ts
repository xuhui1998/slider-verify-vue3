import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path"

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    outDir: "lib", //输出文件名称
    // 库编译模式配置
    lib: {
      entry: path.resolve(__dirname, "./src/components/index.ts"), // 指定组件编译入口文件
      name: "SliderVerifyVue3",
      cssFileName: "style",
      fileName: (format) => `slider-verify-vue3.${format}.js`,
      // formats: ["es", "umd", 'cjs'],
    },
    rollupOptions: {
      // 确保外部化处理那些
      // 你不想打包进库的依赖
      external: ['vue', 'gif'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        // 提供一个全局变量
        globals: {
          vue: 'Vue',
        },
      },
    },
  }
})
