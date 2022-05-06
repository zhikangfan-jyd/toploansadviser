import {
  $content
} from "@nuxt/content";

const webpack = require('webpack');
const axios = require('axios');
//动态生成网站地图，添加reviews 和 articles
const createSitemapRoutes = async () => {
  let routes = [];
  let articleRoutes = [];
  try {
    const {
      $content
    } = require('@nuxt/content');
    let posts = await $content('/reviews').fetch();
    for (const post of posts) {
      routes.push({
        url: `reviews/${post.slug}`,
        priority: 0.8
      });
    }
  } catch (e) {
    routes = [];
  }

  try {
    let results = await axios.get('https://service.toploansadviser.com/api/v1/article');
    if (results.data.status === 'success') {
      results.data.data.rows.forEach(article => {
        articleRoutes.push({
          url: `/guides/${article.link}`,
          priority: 0.8
        })
      })
    }
  } catch (e) {
    articleRoutes = [];
  }
  return routes.concat(articleRoutes);
}

const sitemapFilter = ({
  routes,
  options
}) => {

  routes.forEach(route => {
    if (route.url === '/' || route.url === '/personal-loan' || route.url === '/student-loan' || route.url === '/mortgage-loan') {
      route.priority = 1;
    }
  });
  return routes;
}

export default {
  head: {
    title: 'Best Personal Loans And Mortgage Loans Of 2022 - Toploansadviser',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [{
        charset: 'utf-8'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'We reviewed the Best Rated Personal Loans and Mortgage Loans, you can compare them and choose the best one for you. Get started with Toploansadviser.'
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: 'personal loans, mortgage loans, loan reviews'
      }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }]
  },
  // css: [
  //   '~assets/scss/init.scss'
  // ],
  router: {
    linkActiveClass: 'current'
  },
  plugins: [
    '~plugins/vuelazyload',
    '~plugins/element-ui',
    {
      src: '~/plugins/aos',
      ssr: false,
      mode: 'client'
    }
  ],
  loading: false,
  components: false,
  render: {
    resourceHints: false
  },
  modules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/axios',
    '@nuxt/content',
    '@nuxtjs/robots',
    // '@nuxtjs/amp',
    '@nuxtjs/redirect-module',
    // '@nuxtjs/feed',
    '@nuxtjs/sitemap'
  ],
  styleResources: {
    scss: './assets/scss/variables.scss'
  },
  robots: {
    UserAgent: '*',
    Disallow: '/redirect'
  },
  redirect: [
    // 重定向选项在这里
    {
      from: '/new-personal-loan',
      to: '/personal-loan',
      statusCode: 301
    },
    {
      from: '/best-helco-loan',
      to: '/best-heloc-loan',
      statusCode: 301
    },
    {
      from: '/guides/2a22d685-25b6-4bec-aaf9-5367f599b2b4',
      to: '/',
      statusCode: 301
    },
    {
      from: '/guides/cfe39712-211f-4f86-813a-1bafdf09b0dd',
      to: '/',
      statusCode: 301
    },
    {
      from: '/guides/b1',
      to: '/',
      statusCode: 301
    },
    {
      from: '/guides/6-advantages-to-filling-an-early-fafsa',
      to: '/',
      statusCode: 301
    },
    {
      from: '/guides/s2',
      to: '/',
      statusCode: 301
    },
    {
      from: '/guides/questions-about-credit-card-application',
      to: '/',
      statusCode: 301
    },
    {
      from: '/reviews/temp',
      to: '/',
      statusCode: 301
    }
  ],
  content: {
    liveEdit: false
  },
  build: {
    extractCSS: true, //抽离css
    optimization: {
      minimize: true,
      splitChunks: {
        chunks: 'all', //有效值为all、async和initial
        minChunks: 2, //在拆分之前，模块必须在块之间共享的最少次数
        automaticNameDelimiter: '.', //控制新生成的名字连接符号
        maxAsyncRequests: 30, //按需加载时的最大并行请求数。
        maxInitialRequests: 30, //入口点的最大并行请求数
        minSize: 2048, //要生成的块的最小大小（以字节为单位）
        maxSize: 102400, //每个包的最大字节（慎用ß）

        cacheGroups: {
          element_ui: {
            test: /node_modules[\\/]element-ui/,
            chunks: 'all',
            priority: 20,
            name: true
          },
          vue_lazy_load: {
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
          },
          aos: {
            test: /node_modules[\\/]aos/,
            chunks: 'all',
            priority: 20,
            name: true
          },
          swiper: {
            test: /node_modules[\\/]swiper/,
            chunks: 'all',
            priority: 20,
            name: true
          },
          axios: {
            test: /node_modules[\\/]axios/,
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
        ["component",
          {
            "libraryName": "element-ui",
            "styleLibraryName": "theme-chalk"
          }
        ]
      ]
    }
  },
  sitemap: {
    // 配置站点地图
    hostname: 'https://www.toploansadviser.com',
    cacheTime: 1000 * 60 * 60,
    gzip: true,
    generate: false,
    path: '/sitemap.xml',
    defaults: {
      priority: 0.8
    },
    exclude: ['/error', '/redirect'],
    filter: sitemapFilter,
    routes: createSitemapRoutes
  },
  axios: {
    baseURL: 'http://127.0.0.1:3100'
  },
  server: {
    port: '3100',
    host: '127.0.0.1'
  }
}
