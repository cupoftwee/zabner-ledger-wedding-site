const themeSwapper = require('tailwindcss-theme-swapper')

module.exports = {
  purge: {
    mode: 'production',
    content: ['./src/**/*.html'],
  },
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [
    themeSwapper({
      // TODO - move these to their own files
      themes: [
        // The only required theme is `base`. Every property used in
        // other themes must exist in here.
        {
          name: 'base',
          selectors: [':root'],
          theme: {
            colors: {// Summer Evening palette
              primary: {
                white: '#f5f2f8',
                lightest: '#e2d9e9',
                lighter: '#cfc0db',
                light: '#bba7cc',
                default: '#9E81B6',// Tahiti
                dark: '#8e74a4',
                darker: '#6f5a7f',
                darkest: '#5f4d6d',
                black: '#3f3449'
              },
              secondary: {
                white: '#f9f6f8',
                lightest: '#ede4eb',
                lighter: '#d5c0cf',
                light: '#C3A5BB',// Wisteria
                default: '#b095a8',
                dark: '#9c8496',
                darker: '#756370',
                darkest: '#62535e',
                black: '#3a3138'
              },
              tertiary: {
                white: '#eee9ee',
                lightest: '#ccbccd',
                lighter: '#ab8fac',
                light: '#89628a',
                default: '#673569',
                dark: '#561F58',// Grape
                darker: '#451946',
                darkest: '#3c163e',
                black: '#2b102c'
              },
              complement: {
                white: '#fffafb',
                lightest: '#fff5f7',
                lighter: '#feeff4',
                light: '#feeaf0',
                default: '#FEE5EC',// Blush pink
                dark: '#e5ced4',
                darker: '#cbb7bd',
                darkest: '#98898e',
                black: '#4c4547'
              },
              accent: {
                white: '#e9eaef',
                lightest: '#a5abbd',
                lighter: '#78809d',
                light: '#626b8c',
                default: '#35416b',
                dark: '#1E2C5B',// Dark navy
                darker: '#182349',
                darkest: '#121a37',
                black: '#0f162e'
              },
            },

            // fontFamily: {
            //   display: ['Vevey', 'sans-serif'],
            //   labels: ['Quaver Serif', 'Times New Roman', 'serif'],
            //   body: ['Tofino', 'Helvetica', 'Arial', 'sans-serif'],
            // },
          },
        },

        {
          name: 'vineyard-harvest',
          selectors: ['.theme__vineyard-harvest'],
          theme: {
            colors: {
              primary: {
                white: '#f0e7ee',
                lightest: '#e1d0dc',
                lighter: '#c3a1b9',
                light: '#a57196',
                default: '#874273',
                dark: '#782b62',
                darker: '#691350',// Raspberry
                darkest: '#540f40',
                black: '#350a28'
              },
              secondary: {
                white: '#f9f6f8',
                lightest: '#e7dbe4',
                lighter: '#e1d2dd',
                light: '#d5c0cf',
                default: '#cfb7c9',
                dark: '#C3A5BB',// Wisteria
                darker: '#b095a8',
                darkest: '#897383',
                black: '#756370'
              },
              tertiary: {
                white: '#ddcedd',
                lightest: '#ccb6cc',
                lighter: '#bb9ebb',
                light: '#9a6d98',
                default: '#783d76',
                dark: '#672465',
                darker: '#560C54',// Plum
                darkest: '#450a43',
                black: '#340732'
              },
              complement: {
                white: '#fbfcff',
                lightest: '#f3f5ff',
                lighter: '#e6eafe',
                light: '#dee3fe',
                default: '#D6DCFE',// Lavender
                dark: '#c1c6e5',
                darker: '#abb0cb',
                darkest: '#808498',
                black: '#565866'
              },
              accent: {
                white: '#fff9f4',
                lightest: '#fff6ee',
                lighter: '#fff0e3',
                light: '#ffe6d2',
                default: '#1E2C5B',// Peach
                dark: '#e6cab3',
                darker: '#b39d8b',
                darkest: '#807064',
                black: '#4c433c'
              },
            },
          },
        },
        // Dark Color Palette themes
        // {
        //   name: 'summer-evening-dark',
        //   selectors: ['.theme__summer-evening__dark'],
        //   theme: {
        //     colors: {
        //       primary: '#0f0',
        //     },
        //   },
        // },
        // {
        //   name: 'lavender-vineyard-dark',
        //   selectors: ['.theme__lavender-vineyard__dark'],
        //   theme: {
        //     colors: {
        //       primary: '#0f0',
        //     },
        //   },
        // },

        // Font Themes
        // {
        //   name: 'type-body-fira',
        //   selectors: ['.type__body-fira'],
        //   theme: {
        //     fontFamily: {
        //       body: ['Fira Sans', 'Helvetica', 'Arial', 'sans-serif'],
        //     },
        //   },
        // },
        // {
        //   name: 'type-body-catamaran',
        //   selectors: ['.type__body-catamaran'],
        //   theme: {
        //     fontFamily: {
        //       body: ['Catamaran', 'Helvetica', 'Arial', 'sans-serif'],
        //     },
        //   },
        // },
        // {
        //   name: 'type-label-ovo',
        //   selectors: ['.type__label-ovo'],
        //   theme: {
        //     fontFamily: {
        //       body: ['Ovo', 'Helvetica', 'Arial', 'sans-serif'],
        //     },
        //   },
        // },
      ],
    }),
  ],
}
