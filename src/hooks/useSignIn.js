import { useMutation, useApolloClient } from '@apollo/client';
import { AUTHENTICATE } from '../graphql/mutations';
import useAuthStorage from '../hooks/useAuthStorage';

const useSignIn = () => {
    const authStorage = useAuthStorage();
    const apolloClient = useApolloClient();
    const [mutate, result] = useMutation(AUTHENTICATE);   
  
    const signIn = async ({ username, password }) => {
      const res = await mutate(({ variables: {credentials: { username, password }} }))
      const accessToken = res.data.authenticate.accessToken
      await authStorage.setAccessToken(accessToken)      
      apolloClient.resetStore();
      return res
    };
  
    return [signIn, result];
  };

export default useSignIn  