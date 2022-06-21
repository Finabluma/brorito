export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'lavolta',
    htmlAttrs: {
      lang: 'en',
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

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https:/ / www.npmjs.com / package /@nuxtjs/apollo
    '@nuxtjs/apollo',
    // https://image.nuxtjs.org
    '@nuxt/image',
    // https://cloudinary.nuxtjs.org/setup
    '@nuxtjs/cloudinary'
  ],

  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: process.env.BASE_URL
      }
    },
  },

  image: {
    provider: 'cloudinary',
    cloudinary: {
      baseURL: 'https://res.cloudinary.com/duamwzbgs/image/upload/'
    },
  },

  cloudinary: {
    // Cloudinary configuration options
    cloudName: process.env.CLOUDINARY_NAME,
    apiKey: process.env.CLOUDINARY_KEY,
    apiSecret: process.env.CLOUDINARY_SECRET,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
