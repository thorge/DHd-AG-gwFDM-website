// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  ssr: false,
  hooks: {},

  // alias: {
  //   pinia: "/node_modules/@pinia/nuxt/node_modules/pinia/dist/pinia.mjs"
  // },

  app: {
    baseURL: '/DHd-AG-gwFDM-website/',
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      // link: [
      //   { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      // ],
    }
  },

  site: {
    name: 'DHd-AG gwFDM',
    url: "https://thorge.github.io/DHd-AG-gwFDM-website/",
    breadcrumb: {
      home: {
        label: "Home"
      }
    }
  },

  typescript: {
    shim: false
  },

  build: {
    transpile: ["vuetify"],
  },

  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({
          autoImport: true,
          styles: {
            configFile: 'scss/settings.scss',
          },
         }))
      })
    },
    '@pinia/nuxt',
    '@nuxt/content',
    '@nuxtjs/i18n',
    '@nuxt/image',
    '@nuxtjs/google-fonts',
    '@nuxtjs/seo',
    '@nuxtjs/tailwindcss',
    '@formkit/auto-animate',

  ],

  content: {
    experimental: {
      clientDB: true
    },
    highlight: {
      theme: {
        default: "dracula",
        LightTheme: "dracula",
        dark: "github-dark",
      },
    },
    markdown: {
      anchorLinks: false,
    }
  },

  googleFonts: {
    families: {
      'Roboto': [400, 500, 600]
    }
  },

  ogImage: { enabled: false },

  robots: { robotsTxt: false },

  i18n: {
    baseUrl: 'https://thorge.github.io/DHd-AG-gwFDM-website/',
    customRoutes: 'config',
    pages: {
      'news/index': {
        de: '/aktuelles',
        en: '/news',
      },
      'news/[slug]': {
        de: '/aktuelles/[slug]',
        en: '/news/[slug]',
      },
      about: {
        de: '/ueber-uns',
        en: '/about-us',
      },
      events: {
        de: '/veranstaltungen',
        en: '/events',
      },
      publications: {
        de: '/publikationen',
        en: '/publications',
      },
      contact: {
        de: '/kontakt',
        en: '/contact',
      },
      imprint: {
        de: '/impressum',
        en: '/imprint',
      },
    },
    locales: [
      {
        code: 'de',
        language: 'de-DE',
        name: 'Deutsch',
      },
      {
        code: 'en',
        language: 'en-US',
        name: 'English',
      }
    ],
    defaultLocale: "de",
    strategy: "prefix_except_default", //prefix_and_default
    detectBrowserLanguage: false,
    vueI18n: './i18n.config.ts'
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: "modern-compiler",
        },
        sass: {
          api: "modern-compiler",
        },
      },
    },
    define: {
      "process.env.DEBUG": false,
    },
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },

  nitro: {
    prerender: {
      crawlLinks: true,
      failOnError: false
    }
  },

  runtimeConfig: {
    public: {
    }
  },

  devServerHandlers: [],
  compatibilityDate: '2024-11-01',
})