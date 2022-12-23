import { View, StyleSheet, ScrollView } from 'react-native'
import Constants from 'expo-constants'
import AppBarTab from './AppBarTab'
import theme from '../theme'

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.backgroundColors.appBarPrimary,
  },
  scrollView: {
    flexDirection: 'row',
    flexGrow: 0,
    justifyContent: 'space-evenly',
  },
})

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView styles={styles.scrollView} horizontal>
        <AppBarTab title="Repositories" route="/" />
        <AppBarTab title="Sign In" route="/signin" />
      </ScrollView>
    </View>
  )
}

export default AppBar
