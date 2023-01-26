import colors from 'vuetify/es5/util/colors'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  mode:'spa',
  head: {
    titleTemplate: '%s - my-eve-app',
    title: 'my-eve-app',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',

  ],
  
 

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    [
      '@nuxtjs/firebase', 
      {
         config:{
          apiKey: "AIzaSyBrCWyzOeLa5Kumt5sMx2K2c64uPLkG4E4",
          authDomain: "eveshop-c41e4.firebaseapp.com",
          projectId: "eveshop-c41e4",
          storageBucket: "eveshop-c41e4.appspot.com",
          messagingSenderId: "149985672364",
          appId: "1:149985672364:web:3463d1baccb2204ec87309",
          measurementId: "G-KMRELL4Q0C"
         },
         services:{
          auth:{
            
            onAuthStateChangedMutation:'ON_AUTH_STATE_CHANGED_MUTATION',
            onAuthStateChangedAction:'onAuthStateChangedAction'
          },
          
          
        }
         }
        ]
    
  ],

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
