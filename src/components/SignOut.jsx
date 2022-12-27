import { useApolloClient } from '@apollo/client'
import useAuthStorage from '../hooks/useAuthStorage'
import RepositoryList from './RepositoryList'

const SignOut = () => {
    
  const signOut = async () => {
    const authStorage = useAuthStorage()
    const apolloClient = useApolloClient()

    await authStorage.removeAccessToken()
    apolloClient.resetStore()
  }
  signOut()

  return <RepositoryList />
}

export default SignOut
