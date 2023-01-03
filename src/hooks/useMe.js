import { useQuery } from '@apollo/client';
import { ME } from '../graphql/queries';

const useMe = (variables) => {
  const { data, error, loading } = useQuery(ME, {
    fetchPolicy: 'cache-and-network',
    variables
    });
    if (loading) return {}
    return { data, error, loading }
    
}

export default useMe
