import colors from 'vuetify/es5/util/colors'

export default {
  target: 'static',


  head: {
    titleTemplate: 'Smart Campus - Sveučilište u Mostaru',
    title: 'Smart Campus - Sveučilište u Mostaru',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Web stranica projekta Smart Campus. Projekt u suradnji Sveučilišta u Mostaru, Ericsson Nikola Tesla i HT Eroneta.' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" },
    ]
  },
  
  css: [
  ],

  plugins: [
  ],

  components: true,
  buildModules: [
    '@nuxtjs/vuetify',
  ],

  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/axios'
  ],

  axios: {
    baseURL: 'https://web-admin.sum.ba/api/web/',
    browserBaseURL: 'https://web-admin.sum.ba/api/web/',
    headers: {
      Accept: 'application/json',
      language: "hr",
      "Content-Type": "application/json"
    },
    debug: false
  },

  pwa: {
    manifest: {
      lang: 'hr'
    }
  },

  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      light: true,
      themes: {
        light: {
          primary: "#365A83",
          accent: colors.grey.darken3,
          secondary: "#69B9F2",
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  build: {
  }
}
