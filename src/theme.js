import { Platform } from 'react-native'

const theme = {
  colors: {
    textPrimary: '#24292e',
    textSecondary: '#586069',
    primary: '#0366d6',
    appBarPrimary: 'white',
    mainBackground: '#e1e4e8',
  },
  fontSizes: {
    body: 14,
    subheading: 16,
    heading: 20,
  },
  fonts: {
    main: Platform.select({
      android: 'Roboto',
      ios: 'Arial',
      default: 'system',
    }),
  },
  fontWeights: {
    normal: '400',
    bold: '700',
  },
  backgroundColors: {
    appBarPrimary: '#24292e',
  },
}

export default theme
