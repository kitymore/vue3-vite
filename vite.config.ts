import { fileURLToPath, URL } from 'url'
// mock服务
// import { viteMockServe } from 'vite-plugin-mock'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
// const localEnabled: boolean = (process.env.VITE_USE_MOCK as unknown as boolean) || false;
// const prodEnabled: boolean = (process.env.VITE_USE_MOCK as unknown as boolean) || false;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(), 
    vueJsx(),
    // viteMockServe({
    //   // ↓解析根目录下的mock文件夹
    //   mockPath: "/mock",
    //   localEnabled: true, //localEnabled,  // 开发打包开关
    //  // prodEnabled: prodEnabled, // 生产打包开关
    //   supportTs: true, // 打开后，可以读取 ts 文件模块。 请注意，打开后将无法监视.js 文件。
    //   watchFiles: true, // 监视文件更改
    // }),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server:{
    port: 8000, // 设置服务启动端口号
    open: true, // 设置服务启动时是否自动打开浏览器
    cors: true, // 允许跨域
    //TODO
    // 设置代理，根据我们项目实际情况配置
    proxy: {
      '/dev-api': {
        target: 'http://139.196.18.102:8020/',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/dev-api/, '')
      }
    }
  }
})
