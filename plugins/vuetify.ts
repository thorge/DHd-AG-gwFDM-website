import 'vuetify/styles'
import '@/scss/main.scss';
import minifyTheme from 'minify-css-string'
import {
  LightTheme,
} from "@/theme/LightTheme";
import { createVuetify } from 'vuetify'
import { aliases, custom } from '../theme/IconSet'

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    icons: {
      defaultSet: "custom",
      aliases,
      sets: {
        custom,
      }
    },
    // theme: false,
    theme: {
      options: {
        minifyTheme,
        themeCache: {
          get: key => localStorage.getItem(key),
          set: (key, value) => localStorage.setItem(key, value),
        }
      },
      defaultTheme: "LightTheme",
      themes: {
        LightTheme,
      },
    },
  });
  nuxtApp.vueApp.use(vuetify);
});

