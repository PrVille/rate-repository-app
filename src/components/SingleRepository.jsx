import { useParams } from 'react-router-native'
import Text from './Text'
import { View, FlatList, StyleSheet } from 'react-native'
import RepositoryItem from './RepositoryItem'
import useRepository from '../hooks/useRepository'
import useReviews from '../hooks/useReviews'
import theme from '../theme'
import format from 'date-fns/format'


const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
  container: {
    backgroundColor: 'white',
    padding: 10,
    alignItems: 'stretch',
  },
  headerContainer: {
    flexDirection: 'row',
    flexGrow: 1,
  },
  rating: {
    color: theme.colors.primary,
    fontWeight: 'bold',
  },
  ratingContainer: {
    width: 50,
    height: 50,
    flexGrow: 0,
    borderRadius: 50 / 2,
    borderWidth: 2,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    margin:10, 
    borderColor: theme.colors.primary,
  },
  infoContainer: {
    flexGrow: 0,
    justifyContent: 'center',
  },
  date: {
    color: theme.colors.textSecondary
  },
  bodyContainer: {
    flexGrow: 0,
    margin: 10,
  }
})

const RepositoryInfo = ({ repository }) => {
  return <RepositoryItem item={repository} showButton={true} />
};

export const ReviewItem = ({ review, name }) => {
  return (
    <View style={styles.container}>
    <View style={styles.headerContainer}>
      <View style={styles.ratingContainer}>
        <Text style={styles.rating}>{review.rating}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text
          fontWeight="bold"
          fontSize="subheading"
          style={{ paddingBottom: 2 }}
        >
          {name}
        </Text>
        <Text style={styles.date}>{format(new Date(review.createdAt), 'dd.MM.yyyy')}</Text>
      </View>
    </View>
    <View style={styles.bodyContainer}>
        <Text>{review.text}</Text>
      </View>
    </View>
  )
};

const ItemSeparator = () => <View style={styles.separator} />

const SingleRepository = () => {
  const { id } = useParams()
  const { repository } = useRepository(id)
  const { reviews, fetchMore } = useReviews({repositoryId: id, first: 4})

  const onEndReach = () => {
    fetchMore()
  };

  if (!repository) return null
  return (
    <FlatList
      data={reviews}
      renderItem={({ item }) => <ReviewItem review={item} name={item.user.username} />}
      keyExtractor={({ id }) => id}
      ItemSeparatorComponent={ItemSeparator}
      onEndReached={onEndReach}
      onEndReachedThreshold={0.1}
      ListHeaderComponent={() => <RepositoryInfo repository={repository} />}
    />
  );
  
}

export default SingleRepository
