import { useQuery } from '@apollo/client';
import { ME } from '../graphql/queries';

const useMe = () => {
  const { data, error, loading } = useQuery(ME, {
    fetchPolicy: 'cache-and-network',
    });
    if (loading) return {}
    return { data, error, loading }
    
}

export default useMe
