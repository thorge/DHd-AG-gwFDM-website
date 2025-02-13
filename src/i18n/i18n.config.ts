export default defineI18nConfig(() => ({
  legacy: false, // Use Composition API (modern Vue I18n)
  locale: 'de',  // Default locale
  messages: {
    en: {
      homePage:{
        title: "Welcome to AG gwFDM",
        description: "Discover the AG for Humanities Research Data Management (AG gwFDM) within the DHd Association. Collaborating to advance research and foster innovation.",
      },
      publicationsPage:{
        title: "Publications",
        description: "Explore our latest research, insights, and publications on key topics.",
      },
      contactPage: {
        title: "Contact",
        description: "Get in touch with the AG gwFDM – we're here to answer your questions, hear your feedback, and explore collaborations.",
      },
      aboutPage: {
        title: "About Us",
        description: "Learn more about who we are, our mission, and the values that drive us forward.",
      },
      newsPage: {
        title: "News",
        description: "Catch up on the latest updates, announcements, and stories from our community.",
      },
      eventsPage:{
        title: "Events",
        description: "Stay updated on our latest events, workshops, and opportunities to connect.",
      },
      categoryPage: {
        title: "Categories",
        description: "Browse through our news categories to explore updates and stories tailored to your interests.",
      },
      imprintPage: {
        title: 'Imprint',
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
          publications: {
            label: "Publications"
          },
          imprint: {
            label: "Imprint"
          },
          // 'news-slug': {
          //   label: "News"
          // },
          events: {
            label: "Events"
          }
        }
      },
      language: "Language",
      read_more: "Read More",
      overview: "Overview",
      recent_posts: "Recent Posts",
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
      homePage:{
        title: "Willkommen bei der AG gwFDM",
        description: "Entdecken Sie die AG für geisteswissenschaftliches Forschungsdatenmanagement (AG gwFDM) im Verband DHd. Gemeinsam für Fortschritt in der Forschung und Innovation.",
      },
      publicationsPage:{
        title: "Publikationen",
        description: "Entdecken Sie unsere neuesten Forschungsergebnisse, Einblicke und Publikationen zu wichtigen Themen.",
      },
      contactPage: {
        title: "Kontakt",
        description: "Nehmen Sie Kontakt mit der AG gwFDM auf – wir stehen für Ihre Fragen, Anregungen und Kooperationen gerne zur Verfügung.",
      },
      aboutPage: {
        title: "Über Uns",
        description: "Erfahren Sie mehr über uns, unsere Mission und die Werte, die uns antreiben.",
      },
      newsPage: {
        title: "Aktuelles",
        description: "Erfahren Sie die neuesten Nachrichten, Ankündigungen und Geschichten aus unserer Gemeinschaft.",
      },
      eventsPage:{
        title: "Veranstaltungen",
        description: "Bleiben Sie informiert über unsere neuesten Veranstaltungen, Workshops und Vernetzungsmöglichkeiten.",
      },
      categoryPage: {
        title: "Kategorien",
        description: "Durchstöbern Sie unsere Nachrichtenkategorien, um Updates und Geschichten nach Ihren Interessen zu entdecken.",
      },
      imprintPage: {
        title: 'Impressum',
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
          publications: {
            label: "Publikationen"
          },
          imprint: {
            label: "Impressum"
          },
          // 'news-slug': {
          //   label: "Aktuelles"
          // },
          events: {
            label: "Veranstaltungen"
          }
        }
      },
      language: "Sprache",
      read_more: "Mehr erfahren",
      overview: "Übersicht",
      recent_posts: "Neue Beiträge",
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
