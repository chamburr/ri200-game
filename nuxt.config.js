export default {
  target: 'static',

  router: {
    base: '/ri200-game/'
  },

  head: {
    title: '莱看你是谁？',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          '你想不想知道你和莱佛士书院的哪位先驱或校友最相像呢？现在就回答几个小问题来看看吧！'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: `favicon.ico` },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: `favicon-32x32.png` },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: `favicon-16x16.png` },
      { rel: 'apple-touch-icon', sizes: '180x180', href: `apple-touch-icon.png` },
      { rel: 'mask-icon', href: `safari-pinned-tab.svg`, color: '#ffffff' },
      { rel: 'manifest', href: `site.webmanifest` }
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
