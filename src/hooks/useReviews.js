import { useQuery } from '@apollo/client'
import { GET_REVIEWS } from '../graphql/queries'

const useReviews = (id) => {
  const { data, error, loading } = useQuery(GET_REVIEWS, {
    variables: { repositoryId: id },
  })

  if (loading) return {}
  const reviews = data.repository.reviews
  const reviewNodes = reviews
    ? reviews.edges.map((edge) => edge.node)
    : []

  return { reviews: reviewNodes, error, loading }
}

export default useReviews
