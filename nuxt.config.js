const webpack = require('webpack');

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Best personal loans and mortgage loans of 2021- Toploansadviser',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'We reviewed the Best Rated Personal Loans and Mortgage Loans, you can compare them and choose the best one for you. Get started with Toploansadviser.' },
      { hid: 'keyword', name: 'keyword', content: 'personal loans, mortgage loans, loan reviews' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~assets/scss/init.scss'
  ],
  router: {
    linkActiveClass: 'current'
  },
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~plugins/vuelazyload',
    '~plugins/element-ui',
    { src: '~/plugins/aos', ssr: false, mode: 'client' }
  ],
  // loading: '~/components/loading.vue',
  loading: false,
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: false,

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/axios'
  ],
  styleResources: {
    scss: './assets/scss/variables.scss'
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extractCSS: true,
    optimization: {
      minimize: true,
      // 控制分包，但总体积不变，效果不大
      splitChunks: {
        chunks: 'all',
        automaticNameDelimiter: '.',//控制新生成的名字连接符号
        maxAsyncRequests: 5,
        maxSize: 300000, //每个包的最大字节（慎用ß）

        cacheGroups: {
          antdesignvue: {
            test: /node_modules[\\/]element-ui/,
            chunks: 'all',
            priority: 20,
            name: true
          },
          vuelazyload: {
            test: /node_modules[\\/]vue-lazyload/,
            chunks: 'all',
            priority: 20,
            name: true
          },
          jquery: {
            test: /node_modules[\\/]jquery/,
            chunks: 'all',
            priority: 20,
            name: true
          }

        }
      }
    },
    postcss: {
      
      plugins: {
        'autoprefixer': true,
        'postcss-px2rem': {
          remUnit: 100
        }
      }

    },
    plugins: [
      new webpack.ProvidePlugin({
        '$': 'jquery'
      })
    ],
    babel: {
      plugins: [
        [ "component", 
          {
            "libraryName": "element-ui",
            "styleLibraryName": "theme-chalk"
          }
        ] 
      ] 
    }
  },
  axios: {
    baseURL: 'http://127.0.0.1:3100'
  },
  server: {
    port: '3100',
    host: '127.0.0.1'
  }
}
