import {$content} from "@nuxt/content";

const webpack = require('webpack');
const axios = require('axios');
//动态生成网站地图，添加reviews 和 articles
const createSitemapRoutes = async () => {
  let routes = [];
  let articleRoutes = [];
  try {
    const {$content} = require('@nuxt/content');
    let posts = await $content('/reviews').fetch();
    for (const post of posts) {
      routes.push({
        url: `reviews/${post.slug}`,
        lastmod: new Date(),
        priority: 0.8
      });
    }
  } catch (e) {
    routes = [];
  }

  try {
    let results = await axios.get('https://api.toploansadviser.com/articles/all?website_id=96291576-b82f-47cd-ba81-28d9a33160a0');
    if (results.data.status === 'success') {
      results.data.data.rows.forEach(article => {
        let title = article.title.toLowerCase().split(' ').join('-');
        articleRoutes.push({
          url: `/guides/${title}`,
          lastmod: new Date(),
          priority: 0.8
        })
      })
    }
  } catch (e) {
    articleRoutes = [];
  }
  return routes.concat(articleRoutes);
}

const sitemapFilter = ({routes, options}) => {

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
    meta: [
      {charset: 'utf-8'},
      {
        hid: 'description',
        name: 'description',
        content: 'We reviewed the Best Rated Personal Loans and Mortgage Loans, you can compare them and choose the best one for you. Get started with Toploansadviser.'
      },
      {hid: 'keywords', name: 'keywords', content: 'personal loans, mortgage loans, loan reviews'}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ]
  },
  css: [
    '~assets/scss/init.scss'
  ],
  router: {
    linkActiveClass: 'current'
  },
  plugins: [
    '~plugins/vuelazyload',
    '~plugins/element-ui',
    {src: '~/plugins/aos', ssr: false, mode: 'client'}
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
    {from: '/new-personal-loan', to: '/personal-loan', statusCode: 301}
  ],

  content: {
    liveEdit: false
  },

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
      lastmod: new Date(),
      priority: 0.8
    },
    exclude: ['/error', '/redirect'],
    filter: sitemapFilter,
    routes: createSitemapRoutes
  },
  axios: {
    baseURL: 'http://192.168.50.107:3100'
  },
  server: {
    port: '3100',
    host: '192.168.50.107'
  }
}
