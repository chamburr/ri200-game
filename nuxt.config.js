export default {
  target: 'static',
  ssr: false,

  router: {
    base: '/ri200-game/'
  },

  head: {
    title: '人物匹配',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: 'Lorem ipsum dolor sit amet'}
      // { name: 'og:title', content: 'Title' },
      // { name: 'og:type', content: 'website' },
      // { name: 'og:url', content: 'https://example.com' },
      // { name: 'og:image', content: 'https://example.com/icon.png' },
      // { name: 'og:site_name', content: 'Description' },
      // { name: 'og:description', content: 'Description' },
      // { name: 'twitter:card', content: 'summary' },
      // { name: 'twitter:title', content: 'Title' },
      // { name: 'twitter:image', content: `https://example.com/icon.png` },
      // { name: 'twitter:description', content: 'Description' }
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
      // { rel: 'icon', type: 'image/png', sizes: '32x32', href: 'favicon-32x32.png' },
      // { rel: 'icon', type: 'image/png', sizes: '16x16', href: 'favicon-16x16.png' },
      // { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      // { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#1e90ff' },
      // { rel: 'canonical', href: 'https://example.com' }
    ]
  },

  build: {
    babel: {
      compact: true
    }
  },

  css: ['~/assets/scss/styles.scss'],

  components: true,

  generate: {
    crawler: false,
    fallback: '404.html'
  },

  modules: ['bootstrap-vue/nuxt'],
  buildModules: ['@nuxtjs/eslint-module', '@nuxtjs/stylelint-module', '@nuxtjs/style-resources'],

  bootstrapVue: {
    css: false,
    components: ['BContainer', 'BButton', 'BCard', 'BProgress', 'BFormSelect']
  },

  styleResources: {
    scss: [
      '~/assets/scss/_variables.scss',
      'bootstrap/scss/_functions.scss',
      'bootstrap/scss/_variables.scss',
      'bootstrap/scss/_mixins.scss'
    ]
  }
}
