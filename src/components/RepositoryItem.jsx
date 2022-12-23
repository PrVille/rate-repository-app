import Text from './Text'
import { View, Image, StyleSheet } from 'react-native'
import theme from '../theme'

const headerStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexGrow: 1,
  },
  avatar: {
    width: 50,
    height: 50,
  },
  avatarContainer: {
    flexGrow: 0,
    paddingRight: 15,
  },
  infoContainer: {
    flexGrow: 0,
  },
  languageText: {
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    backgroundColor: theme.colors.primary,
    color: 'white',
    padding: 2,
    borderRadius: 5,
    borderWidth: 2,
    overflow: 'hidden',
    borderColor: theme.colors.primary,
  },
})

const Header = ({ imageURI, name, language }) => {
  return (
    <View style={headerStyles.container}>
      <View style={headerStyles.avatarContainer}>
        <Image
          style={headerStyles.avatar}
          source={{
            uri: imageURI,
          }}
        />
      </View>
      <View style={headerStyles.infoContainer}>
        <Text
          fontWeight="bold"
          fontSize="subheading"
          style={{ paddingBottom: 2 }}
        >
          {name}
        </Text>
        <Text style={headerStyles.languageText}>{language}</Text>
      </View>
    </View>
  )
}

const bodyStyles = StyleSheet.create({
  container: {
    paddingVertical: 15,
  },
})

const Body = ({ description }) => {
  return (
    <View style={bodyStyles.container}>
      <Text>{description}</Text>
    </View>
  )
}

const footerStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexGrow: 1,
    justifyContent: 'space-around',
  },
  section: {
    flexGrow: 1,
    alignItems: 'center',
  },
})

const FooterSection = ({ label, value }) => {
  return (
    <View style={footerStyles.section}>
      <Text>{value > 1000 ? `${(value / 1000).toFixed(1)}k` : value}</Text>
      <Text color="textSecondary">{label}</Text>
    </View>
  )
}

const Footer = ({ item }) => {
  return (
    <View style={footerStyles.container}>
      <FooterSection label="Stars" value={item.stargazersCount} />
      <FooterSection label="Forks" value={item.forksCount} />
      <FooterSection label="Reviews" value={item.reviewCount} />
      <FooterSection label="Rating" value={item.ratingAverage} />
    </View>
  )
}

const itemStyles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10,
    alignItems: 'stretch',
  },
})

const RepositoryItem = ({ item }) => {
  return (
    <View style={itemStyles.container}>
      <Header
        imageURI={item.ownerAvatarUrl}
        name={item.fullName}
        language={item.language}
      />
      <Body description={item.description} />
      <Footer item={item} />
    </View>
  )
}

export default RepositoryItem
