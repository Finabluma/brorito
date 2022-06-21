export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Cocina mediterránea * La Volta',
    htmlAttrs: {
      lang: 'es',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://use.typekit.net/hnq7yja.css' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/main.css'
  ],

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

  // Defaults options
  tailwindcss: {
    jit: true,
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config.js',
    exposeConfig: true,
    viewer: true,
  },

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
