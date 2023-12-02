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
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Rentry WIki', link: 'https://rentry.org/mediasavvy' },
      { text: 'WhatsApp Channel', link: '/whatsapp-channel' }
    ],
    sidebar: [
      {
        text: 'Categories:',
        items: [
          { text: '👋 Welcome', link: '/Wiki/' },
          { text: '🚫 Adblocking', link: '/Wiki/Adblocking' },
          { text: '🤖 AI', link: '/Wiki/AI' },
          { text: '💾 Software', link: '/Wiki/Software' },
          { text: '🧩 Browser Extensions', link: '/Wiki/Extensions' },
          { text: '🎮 Games', link: '/Wiki/Games' },
          { text: '🛡️ Security', link: '/Wiki/Security' },
          { text: '🎵 Music', link: '/Wiki/Music' },
          { text: '💾 Software', link: '/Wiki/Software' },
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
