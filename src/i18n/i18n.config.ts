export default defineI18nConfig(() => ({
  legacy: false, // Use Composition API (modern Vue I18n)
  locale: 'de',  // Default locale
  messages: {
    en: {
      newsPage: {
        description: "Catch up on the latest updates, announcements, and stories from our community.",
      },
      categoryPage: {
        title: "Categories",
        description: "Browse through our news categories to explore updates and stories tailored to your interests.",
      },
      footerAbout: {
        title: 'AG gwFDM',
        description: 'Working Group for Humanities Research Data Management within the DHd Association.',
      },
      breadcrumb: {
        items: {
          news: {
            label: "News"
          },
          categories: {
            label: "Categories"
          },
          index: {
            label: "Home"
          },
          slug: {
            label: "Slug"
          },
          about: {
            label: "About"
          },
          contact: {
            label: "Contact"
          },
          publications: {
            label: "Publications"
          },
          imprint: {
            label: "Imprint"
          },
          events: {
            label: "Events"
          }
        }
      },
      language: "Language",
      read_more: "Read More",
      overview: "Overview",
      recentPosts: "Recent Posts",
      search: "Search",
      newsletter: {
        title: "Newsletter",
        subscribe: "Subscribe",
        description: "Subscribe to the DHd mailing list.",
        visitArchive: "To view past messages sent to this list, please visit the {link}.",
        dhdArchive: "DHd list archive"
      },
      serviceCatalogue: "Service Catalogue",
    },
    de: {
      newsPage: {
        description: "Erfahren Sie die neuesten Nachrichten, Ankündigungen und Geschichten aus unserer Gemeinschaft.",
      },
      categoryPage: {
        title: "Kategorien",
        description: "Durchstöbern Sie unsere Nachrichtenkategorien, um Updates und Geschichten nach Ihren Interessen zu entdecken.",
      },
      footerAbout: {
        title: 'AG gwFDM',
        description: 'AG für geisteswissenschaftliches Forschungsdatenmanagement im Verband DHd.',
      },
      breadcrumb: {
        items: {
          news: {
            label: "Aktuelles"
          },
          categories: {
            label: "Kategorien"
          },
          index: {
            label: "Home"
          },
          slug: {
            label: "Slug"
          },
          about: {
            label: "Über Uns"
          },
          contact: {
            label: "Kontakt"
          },
          publications: {
            label: "Publikationen"
          },
          imprint: {
            label: "Impressum"
          },
          events: {
            label: "Veranstaltungen"
          }
        }
      },
      language: "Sprache",
      read_more: "Mehr erfahren",
      overview: "Übersicht",
      recentPosts: "Neue Beiträge",
      search: "Suche",
      newsletter: {
        title: "Newsletter",
        subscribe: "Abonnieren",
        description: "Registrieren Sie sich für die DHd-Mailingliste.",
        "visitArchive": "Um frühere Nachrichten an diese Liste zu sehen, besuchen Sie bitte das {link}.",
        dhdArchive: "Archiv der Liste DHd"
      },
      serviceCatalogue: "Dienstekatalog",
    }
  }
}))
