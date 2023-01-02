import * as React from 'react'
import { View } from 'react-native'
import Text from './Text'
import { Button, Menu, Provider } from 'react-native-paper'
import theme from '../theme'

const Picker = ({ setOrdering }) => {
  const [visible, setVisible] = React.useState(false)

  const openMenu = () => setVisible(true)

  const closeMenu = () => setVisible(false)

  const handlePress = (ordering) => {
    closeMenu()
    setOrdering(ordering)
  }

  return (
    <Provider>
      <View
        style={{
          padding: 10,
        }}
      >
        <Button
          style={{
            backgroundColor: theme.colors.primary,
            borderRadius: 5,
            borderWidth: 2,
            overflow: 'hidden',
            borderColor: theme.colors.primary,
          }}
          onPress={openMenu}
        >
          <Text fontWeight="bold" style={{ color: 'white' }}>
            Sort repositories
          </Text>
        </Button>
        <Menu
          visible={visible}
          onDismiss={closeMenu}
          anchor={{ x: 105, y: 60 }}
        >
          <Menu.Item
            onPress={() =>
              handlePress({ orderBy: 'CREATED_AT', orderDirection: 'DESC' })
            }
            title="Latest repositories"
          />
          <Menu.Item
            onPress={() =>
              handlePress({ orderBy: 'RATING_AVERAGE', orderDirection: 'DESC' })
            }
            title="Highest rated repositories"
          />
          <Menu.Item
            onPress={() =>
              handlePress({ orderBy: 'RATING_AVERAGE', orderDirection: 'ASC' })
            }
            title="Lowest rated repositories"
          />
        </Menu>
      </View>
    </Provider>
  )
}

export default Picker
