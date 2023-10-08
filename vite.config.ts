import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from "path";
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import {ElementPlusResolver} from "unplugin-vue-components/resolvers";
// 路径
const pathSrc = path.resolve(__dirname,'src')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
      vue(),
      AutoImport({
        // Auto import functions from Vue, e.g. ref, reactive, toRef...
        // 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
        imports:['vue'],

        // Auto import functions from Element Plus, e.g. ElMessage, ElMessageBox... (with style)
        // 自动导入 Element Plus 相关函数，如：ElMessage, ElMessageBox... (带样式)
        resolvers: [
          ElementPlusResolver(),
        ],
        dts:path.resolve(pathSrc,"auto-imports.d.ts")
      }),

      Components({
        resolvers: [
          ElementPlusResolver(),
        ],
        dts: path.resolve(pathSrc, "components.d.ts"),
      }),
  ],
  server:{
    host:'0.0.0.0',
    port:8896,
    open:false,
    https:false,
    cors:true,
    proxy: {
      "/api": {
        target: "https://45.125.46.201:16688",
        // target: "https://api.map.baidu.com",
        secure: false,
        changeOrigin: true, //this one is declare for cross
        rewrite: (path) => {console.log(path); return path.replace(/^\/api/, '')}
      }
    },
    // hmr:{
    //   overlay: false, // 屏蔽服务器报错
    //   protocol: 'ws',
    //   host:'127.0.0.1',
    //   clientPort: 8080
    // }
  },
  resolve:{
    alias:{
      '@': pathSrc,
    }
  },
  css:{
    preprocessorOptions:{
      less:{
        modifyVars:{
          hack:`true; @import (reference) "${path.resolve("src/assets/css/base.less")}";`
        }
      }
    }
  }
})
