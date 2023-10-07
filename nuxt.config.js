import colors from 'vuetify/es5/util/colors'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - poke-sleep',
    title: 'Pokémon Sleep Companion',
    htmlAttrs: {
      lang: 'pt-BR',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  plugins: [],
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  modules: ["@nuxtjs/axios", "@nuxtjs/i18n"],

  i18n: {
    strategy: "no_prefix",
    locales: [
      {
        code: "en-US",
        file: "en-US.js",
        name: "English",
      },
      {
        code: "pt-BR",
        file: "pt-BR.js",
        name: "Português",
      },
    ],
    lazy: true,
    langDir: "lang/",
    defaultLocale: "pt-BR",
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },
  ssr: false,
  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: '#2B2F30',
          accent: '#222',
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
          grass: '#4D9358',
          fire: '#D8483F',
          water: '#458EC3',
          steel: '#1C5E81',
          ghost: '#5A3A5E',
          fighting: '#CB8400',
          poison: '#642194',
          ground: '#896737',
          electric: '#E0C82A',
          psychic: '#FF008A',
          rock: '#A38F6A',
          ice: '#66BFCF',
          flying: '#A89FED',
          bug: '#8FBC8F',
          dragon: '#5B3EFE',
          normal: '#A8A77A',
          fairy: '#FF65A5',
          dark: '#5A5366',

          dozing: '#DAC865',
          snoozing: '#64c9c8',
          slumbering: '#5F95EB',

          curry: '#D8483F',
          salad: '#4D9358',
          desert: '#458EC3',

        },
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
