const themeSwapper = require('tailwindcss-theme-swapper')

// TODO - move to their own thing
const palettes = {
  summerEvening: {
    light: {
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
    dark:{
      primary: {
        black: '#f5f2f8',
        darkest: '#e2d9e9',
        darker: '#cfc0db',
        dark: '#bba7cc',
        default: '#9E81B6',// Tahiti
        light: '#8e74a4',
        lighter: '#6f5a7f',
        lightest: '#5f4d6d',
        white: '#3f3449'
      },
      secondary: {
        black: '#f9f6f8',
        darkest: '#ede4eb',
        darker: '#d5c0cf',
        dark: '#C3A5BB',// Wisteria
        default: '#b095a8',
        light: '#9c8496',
        lighter: '#756370',
        lightest: '#62535e',
        white: '#3a3138'
      },
      tertiary: {
        black: '#eee9ee',
        darkest: '#ccbccd',
        darker: '#ab8fac',
        dark: '#89628a',
        default: '#673569',
        light: '#561F58',// Grape
        lighter: '#451946',
        lightest: '#3c163e',
        white: '#2b102c'
      },
      complement: {
        black: '#fffafb',
        darkest: '#fff5f7',
        darker: '#feeff4',
        dark: '#feeaf0',
        default: '#FEE5EC',// Blush pink
        light: '#e5ced4',
        lighter: '#cbb7bd',
        lightest: '#98898e',
        white: '#4c4547'
      },
      accent: {
        black: '#e9eaef',
        darkest: '#a5abbd',
        darker: '#78809d',
        dark: '#626b8c',
        default: '#35416b',
        light: '#1E2C5B',// Dark navy
        lighter: '#182349',
        lightest: '#121a37',
        white: '#0f162e'
      },
    },
  },
  vineyardHarvest: {
    light: {
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
      tertiary: {
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
      secondary: {
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
      accent: {
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
      complement: {
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
    dark: {}
  }
}



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
    require('@tailwindcss/typography'),
    themeSwapper({
      // TODO - move these to their own files
      themes: [
        // The only required theme is `base`. Every property used in
        // other themes must exist in here.
        {
          name: 'base',
          selectors: [':root'],
          theme: {
            colors: palettes.summerEvening.light,
            fontFamily: {
              display: "'Vevey', 'Helvetica', sans-serif",
              labels: "'Quaver Serif', 'Times New Roman', serif",
              body: "'Tofino', 'Helvetica', Arial, sans-serif",
            },
          },
        },

        // Color Palette Themes
        {
          name: 'summer-evening__light',
          selectors: ['.theme-palette__summer-evening__light'],
          theme: {
            colors: palettes.summerEvening.light
          },
        },
        {
          name: 'summer-evening__dark',
          selectors: ['.theme-palette__summer-evening__dark'],
          theme: {
            colors: palettes.summerEvening.dark
          },
        },

        {
          name: 'vineyard-harvest__light',
          selectors: ['.theme-palette__vineyard-harvest__light'],
          theme: {
            colors: palettes.vineyardHarvest.light
          },
        },
        {
          name: 'vineyard-harvest__dark',
          selectors: ['.theme-palette__vineyard-harvest__dark'],
          theme: {
            colors: palettes.vineyardHarvest.dark
          },
        },


        // Font Themes
        {
          name: 'type-body__fira',
          selectors: ['.type-body__fira'],
          theme: {
            fontFamily: {
              body: "'Fira Sans', 'Helvetica', 'Arial', 'sans-serif'",
            },
          },
        },
        {
          name: 'type-body__tofino',
          selectors: ['.type-body__tofino'],
          theme: {
            fontFamily: {
              body: "'Tofino', 'Helvetica', Arial, sans-serif",
            }
          },
        },
        {
          name: 'type-body__catamaran',
          selectors: ['.type-body__catamaran'],
          theme: {
            fontFamily: {
              body: "'Catamaran', 'Helvetica', 'Arial', 'sans-serif'",
            },
          },
        },
        {
          name: 'type-body__raleway',
          selectors: ['.type-body__raleway'],
          theme: {
            fontFamily: {
              body: "'Raleway', 'Helvetica', 'Arial', 'sans-serif'",
            },
          },
        },

        {
          name: 'type-labels__cormorant',
          selectors: ['.type-labels__cormorant'],
          theme: {
            fontFamily: {
              labels: "'Cormorant Garamond', 'serif'",
            },
          },
        },
        {
          name: 'type-labels__ovo',
          selectors: ['.type-labels__ovo'],
          theme: {
            fontFamily: {
              labels: "'Ovo', 'serif'",
            },
          },
        },
      ],
    }),
  ],
}
