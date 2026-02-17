// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  ssr: true,
  hooks: {},

  srcDir: 'app/',

  app: {
    baseURL: '/DHd-AG-gwFDM-website/',
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/DHd-AG-gwFDM-website/favicon.ico' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/DHd-AG-gwFDM-website/apple-touch-icon.png' },
        { rel: 'icon', type: 'image/png', sizes: '512x512', href: '/DHd-AG-gwFDM-website/android-chrome-512x512.png' },
        { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/DHd-AG-gwFDM-website/android-chrome-192x192.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/DHd-AG-gwFDM-website/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/DHd-AG-gwFDM-website/favicon-16x16.png' },
        { rel: 'manifest', href: '/DHd-AG-gwFDM-website/site.webmanifest' }
      ]
    }
  },

  css: ["~/assets/app.css"],

  site: {
    name: 'DHd-AG gwFDM',
    url: "https://thorge.github.io",
    breadcrumb: {
      home: {
        label: "Home"
      }
    }
  },

  typescript: {
    shim: false
  },

  modules: [
    '@pinia/nuxt',
    '@nuxtjs/seo',
    '@nuxt/content',
    '@nuxtjs/i18n',
    '@nuxt/image',
    '@nuxtjs/google-fonts',
  ],

  content: {
    build: {
      markdown: {
        highlight: {
          theme: {
            default: "github-light",
            dark: 'github-dark',
            sepia: 'monokai'
          },
        },
      },
    },
    renderer: {
      anchorLinks: false,
    }
  },

  googleFonts: {
    families: {
      'Nunito': [400, 500, 600]
    }
  },

  image: {
    quality: 80,
    format: ['webp']
  },

  ogImage: { enabled: false },

  robots: { robotsTxt: false },

  i18n: {
    baseUrl: 'https://thorge.github.io',
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
    build: {
      target: ["es2022", "chrome112", "edge112", "firefox112", "safari16"],
    },
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
    plugins: [tailwindcss()],
  },

  nitro: {
    prerender: {
      crawlLinks: true,
      failOnError: false
    }
  },

  runtimeConfig: {
    public: {
      sitePath: '/DHd-AG-gwFDM-website',
    },
  },

  devServerHandlers: [],
  compatibilityDate: '2024-11-01',
})