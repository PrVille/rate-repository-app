import React from 'react'
import { FlatList, View, StyleSheet } from 'react-native'
import useMe from '../hooks/useMe'
import { ReviewItem } from './SingleRepository'

const styles = StyleSheet.create({
    separator: {
      height: 10,
    },
})

const ItemSeparator = () => <View style={styles.separator} />

const MyReviews = () => {
  const { data } = useMe({includeReviews: true})
  console.log(data)
  const reviews = data?.me.reviews
  console.log(reviews)
  const reviewNodes = reviews ? reviews.edges.map((edge) => edge.node) : []
  console.log(reviewNodes)


  return (
    <FlatList
      data={reviewNodes}
      renderItem={({ item }) => <ReviewItem review={item} name={item.repository.fullName} />}
      keyExtractor={({ id }) => id}
      ItemSeparatorComponent={ItemSeparator}
    />
  );
}

export default MyReviews
