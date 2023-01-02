import { useState } from 'react'
import { FlatList, View, StyleSheet, Pressable } from 'react-native'
import { useNavigate } from 'react-router-native'
import useRepositories from '../hooks/useRepositories'
import RepositoryItem from './RepositoryItem'
import Picker from './Picker'
import { Searchbar } from 'react-native-paper';
import { useDebounce } from 'use-debounce';


const styles = StyleSheet.create({
  separator: {
    height: 5,
  },
})

const ItemSeparator = () => <View style={styles.separator} />

export const RepositoryListContainer = ({ repositories, setOrdering, setSearch, search }) => {
  const navigate = useNavigate()

  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : []

  return (
    <FlatList
      data={repositoryNodes}
      ListHeaderComponent={
        <>
         <Searchbar
      placeholder="Search"
      onChangeText={setSearch}
      value={search}
    />
        <Picker setOrdering={setOrdering} />
        </>
      
    }
      ListHeaderComponentStyle={{ zIndex: 1 }}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => (
        <Pressable onPress={() => navigate(`/${item.id}`)}>
          <RepositoryItem item={item} />
        </Pressable>
      )}
    />
  )
}

const RepositoryList = () => {
  const [ordering, setOrdering] = useState({orderBy: 'CREATED_AT', orderDirection: "DESC"})
  const [search, setSearch] = useState('')
  const [value] = useDebounce(search, 500);
  const { repositories } = useRepositories(ordering, value)

  return (
    <>
      <RepositoryListContainer
        repositories={repositories}
        setOrdering={setOrdering}
        setSearch={setSearch}
        search={search}
      />
    </>
  )
}

export default RepositoryList
