import Text from './Text'
import { View, Pressable, StyleSheet } from 'react-native'
import { useNavigate } from 'react-router-native'
import { Formik } from 'formik'
import FormikTextInput from './FormikTextInput'
import * as yup from 'yup'

import useSignUp from '../hooks/useSignUp'
import useSignIn from '../hooks/useSignIn'
import theme from '../theme'

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10,
    alignItems: 'stretch',
  },
  button: {
    backgroundColor: theme.colors.primary,
    padding: 15,
    margin: 10,
    borderRadius: 5,
    borderWidth: 2,
    overflow: 'hidden',
    borderColor: theme.colors.primary,
  },
  buttonText: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white',
  },
})

const SignUpForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <FormikTextInput name="username" placeholder="Username" />
      <FormikTextInput name="password" placeholder="Password" secureTextEntry />
      <FormikTextInput
        name="passwordConfirmation"
        placeholder="Password confirmation"
        secureTextEntry
      />
      <Pressable style={styles.button} onPress={onSubmit}>
        <Text style={styles.buttonText}>Sign up</Text>
      </Pressable>
    </View>
  )
}

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .max(30, 'Username must not be longer than 30 characters')
    .required('Username is required'),
  password: yup
    .string()
    .min(5, 'Password is too short, must be atleast 5 characters')
    .max(50, 'Password is too long, must be less than 50 characters')
    .required('Password is required'),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords are not matching')
    .required('Password confirmation is required'),
})

export const SignUpContainer = ({ onSubmit }) => {
  const initialValues = {
    username: '',
    password: '',
    passwordConfirmation: '',
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <SignUpForm onSubmit={handleSubmit} />}
    </Formik>
  )
}

const SignUp = () => {
  const [signUp] = useSignUp()
  const [signIn] = useSignIn();
  const navigate = useNavigate()

  const onSubmit = async (values) => {
    const { username, password } = values;
    try {
      await signUp({ username, password });
      await signIn({ username, password });
      navigate(`/`)
    } catch (e) {
      console.log(e);
    }
  }

  return <SignUpContainer onSubmit={onSubmit} />
}

export default SignUp
