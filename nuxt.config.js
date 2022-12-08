const title = '人物匹配'
const description = 'Lorem ipsum dolor sit amet'
const domain = 'chamburr.github.io'
const path = '/ri200-game/'

export default {
  target: 'static',
  ssr: false,

  router: {
    base: path
  },

  head: {
    title: title,
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: description },
      { name: 'og:title', content: title },
      { name: 'og:type', content: 'website' },
      { name: 'og:url', content: `https://${domain}${path === '/' ? '' : path}` },
      { name: 'og:image', content: `https://${domain}${path}apple-touch-icon.png` },
      { name: 'og:site_name', content: description },
      { name: 'og:description', content: description },
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:image', content: `https://${domain}${path}apple-touch-icon.png` },
      { name: 'twitter:description', content: description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: `${path}favicon.ico` },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: `${path}favicon-32x32.png` },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: `${path}favicon-16x16.png` },
      { rel: 'apple-touch-icon', sizes: '180x180', href: `${path}apple-touch-icon.png` },
      { rel: 'mask-icon', href: `${path}safari-pinned-tab.svg`, color: '#ffffff' },
      { rel: 'manifest', href: `${path}site.webmanifest` },
      { rel: 'canonical', href: `https://${domain}${path === '/' ? '' : path}` }
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
