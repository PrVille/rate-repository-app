import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = (ordering, search) => {  
  console.log(search);
  
  const { data, error, loading } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
    variables: {...ordering, searchKeyword: search}
    });
    if (loading) return {}
    return { repositories: data.repositories, error, loading }
    
}

export default useRepositories
