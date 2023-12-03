import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "MediaSavvy",
  description: "A free piracy and media wiki",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: {
      options: {
        miniSearch: { searchOptions: { combineWith: "AND" } },
        detailedView: false,
      },
      provider: "local",
    },
    outline: "deep",
    logo: "/logo.ico",
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Rentry Wiki', link: 'https://rentry.org/mediasavvy' },
      { text: 'WhatsApp Channel', link: 'https://mediasavvy.pages.dev/whatsapp-channel' }
    ],
    sidebar: [
      {
        text: 'Welcome'
        ,items: [ 
          { text: '👋 Welcome', link: '/Wiki' },
          { text: '🚀 Beginners Guide to Piracy', link: '/Beginners-Guide-to-Piracy' }
        ]
      },
      {
        text: 'Categories:',
        items: [
          { text: '🚫 Adblocking', link: '/Wiki/Adblocking' },
          { text: '🤖 AI', link: '/Wiki/AI' },
          { text: '💾 Software', link: '/Wiki/Software' },
          { text: '🧩 Browser Extensions', link: '/Wiki/Extensions' },
          { text: '🎮 Games', link: '/Wiki/Games' },
          { text: '🛡️ Security', link: '/Wiki/Security' },
          { text: '🎵 Music', link: '/Wiki/Music' },
          { text: '🎦 Movies/TV', link: '/Wiki/MoviesandTVShows' },
          { text: '🔠 Piracy Glossary', link: '/Wiki/PiracyGlossary' },
          { text: '⚠️ Unsafe sites/programs', link: '/Wiki/UnsafeSites' }
        ]
      }
    ],
        socialLinks: [
      { icon: 'github', link: 'https://github.com/MediaSavvy' }
    ]
  }
})
