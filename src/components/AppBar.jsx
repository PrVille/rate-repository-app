import { View, StyleSheet, ScrollView } from 'react-native'
import useMe from '../hooks/useMe'
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
  const { data } = useMe()

  return (
    <View style={styles.container}>
      <ScrollView styles={styles.scrollView} horizontal>
        <AppBarTab title="Repositories" route="/" />
        {data && data.me && <AppBarTab title='Create a review' route='/review' />}
        {data && data.me ? <AppBarTab title="Sign Out" route="/signout" /> : <AppBarTab title="Sign In" route="/signin" />}
        {!(data && data.me) && <AppBarTab title="Sign Up" route="/signup" />}
      </ScrollView>
    </View>
  )
}

export default AppBar
