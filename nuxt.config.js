
export default {
  mode: 'universal',
  server: {
    port: 3000, // default: 3000
    host: '0.0.0.0', // default: localhost,
    timing: false
  },
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || 'Monitoring-Pro',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/img/weather.png' },
    ],
    script: [
      { src: "http://code.highcharts.com/stock/highstock.js"},

      { src: "/vendors/@coreui/coreui/js/coreui.bundle.min.js" },
      { src: "/vendors/@coreui/icons/js/svgxuse.min.js" },
      { src: "/vendors/@coreui/chartjs/js/coreui-chartjs.bundle.js" },
      { src: "/vendors/@coreui/utils/js/coreui-utils.js" },
      // { src: "/js/main.js" },
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    "@/static/css/style.css",
    "@/static/vendors/@coreui/chartjs/css/coreui-chartjs.css",
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    'nuxt-moment',
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    baseURL: "https://covid19.mathdro.id/api",
    progress: false,
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
