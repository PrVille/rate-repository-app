import { StyleSheet } from 'react-native'
import { Link } from 'react-router-native'

import Text from './Text'
import theme from '../theme'

const styles = StyleSheet.create({
  tabText: {
    fontSize: theme.fontSizes.heading,
    fontWeight: theme.fontWeights.bold,
    color: theme.colors.appBarPrimary,
    padding: 20,
    flexGrow: 1,
    alignItems: 'stretch',
  },
})

const AppBarTab = ({ title, route }) => {
  return (
    <Link to={route}>
      <Text style={styles.tabText}>{title}</Text>
    </Link>
  )
}

export default AppBarTab
