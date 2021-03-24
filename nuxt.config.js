export default {
  pageTransition: 'my-page',
  server: {
    host: '0.0.0.0',
    port: 3000,
  },
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Malati Autocast',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: `Malati Autocast Pvt. Ltd. is the newest addition to the Malati Group and lives up to the 50 year heritage symbolizing Quality and Trust.`,
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600;700&display=swap',
      },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Lora:wght@400&display=swap',
      },
    ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    {
      src: '@/plugins/carousel3d.js',
      ssr: false,
    },
    {
      src: '~/plugins/aos.js',
      ssr: false,
    },
    { src: '~/plugins/toast.js', ssr: false },
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: ['@nuxt/image'],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
    '@nuxtjs/device',
  ],
  styleResources: {
    // your settings here
    scss: ['./assets/global.scss'],
  },

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    baseURL:
      process.env.NODE_ENV == 'production'
        ? 'https://api.malatiautocast.com'
        : 'http://localhost:1337',
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
}
