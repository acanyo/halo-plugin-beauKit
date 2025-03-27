import { defineConfig } from 'vite'
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'
import { resolve } from 'path'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  css: {
    postcss: {
      plugins: [
        tailwindcss(),
        autoprefixer(),
      ],
    },
  },
  build: {
    // 开启源码映射
    sourcemap: true,
    // 启用压缩
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,  // 移除 console
        drop_debugger: true, // 移除 debugger
      },
      format: {
        comments: false,     // 移除注释
      },
    },
    lib: {
      entry: resolve(__dirname, 'src/main.ts'),
      name: 'SwissKnife',
      fileName: (format) => `@js/swiss-knife.${format}.js`,
      formats: ['umd']
    },
    outDir: '../static',
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        inlineDynamicImports: true,
        manualChunks: undefined,
        // 配置 JS 文件输出路径
        entryFileNames: '@js/[name]-[hash].js',
        chunkFileNames: '@js/[name]-[hash].js',
        assetFileNames: (assetInfo) => {
          if (!assetInfo?.name) return 'assets/[name].[hash][extname]'
          const info = assetInfo.name.split('.')
          const extType = info[info.length - 1]
          if (extType === 'css') {
            return '@css/[name]-[hash].css'
          }
          if (/\.(png|jpe?g|gif|svg|webp|ico)$/.test(assetInfo.name)) {
            return '@img/[name]-[hash].[ext]'
          }
          return 'assets/[name]-[hash].[ext]'
        }
      }
    },
    cssCodeSplit: false,
    // 开启 CSS 压缩
    cssMinify: true,
  },
  optimizeDeps: {
    include: ['tailwindcss', 'autoprefixer']
  },
  // 确保 CSS 文件被正确处理
  plugins: [
    {
      name: 'css-transform',
      transform(code, id) {
        if (id.endsWith('.css')) {
          return {
            code: code,
            map: null
          }
        }
      }
    }
  ]
})
