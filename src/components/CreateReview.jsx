import Text from './Text'
import { View, Pressable, StyleSheet } from 'react-native'
import { useNavigate } from 'react-router-native'
import { Formik } from 'formik'
import FormikTextInput from './FormikTextInput'
import * as yup from 'yup'

import useCreateReview from '../hooks/useCreateReview'
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

const ReviewForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <FormikTextInput name="ownerName" placeholder="Repository owner name" />
      <FormikTextInput name="repositoryName" placeholder="Repository name" />
      <FormikTextInput name="rating" placeholder="Rating between 0 and 100" />
      <FormikTextInput name="review" placeholder="Review"  />
      <Pressable style={styles.button} onPress={onSubmit}>
        <Text style={styles.buttonText}>Create a review</Text>
      </Pressable>
    </View>
  )
}

const validationSchema = yup.object().shape({
  ownerName: yup.string().required('Repository owner name is required'),
  repositoryName: yup.string().required('Repository name is required'),
  rating: yup.number().min(0, 'Rating must not be lower than 0').max(100, 'Rating must not be larger than 100').required('Rating is required'),
  review: yup.string().optional()
})

export const ReviewContainer = ({ onSubmit }) => {
  const initialValues = {
    ownerName: '',
    repositoryName: '',
    rating: '',
    review: ''
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <ReviewForm onSubmit={handleSubmit} />}
    </Formik>
  )
}

const CreateReview = () => {
  const [createReview] = useCreateReview()
  const navigate = useNavigate()

  const onSubmit = async (values) => {
    const { ownerName, repositoryName, rating, review } = values;
    try {
      const { data } = await createReview({ ownerName, repositoryName, rating, review });
      navigate(`/${data.createReview.repositoryId}`)
    } catch (e) {
      console.log(e);
    }
  }

  return <ReviewContainer onSubmit={onSubmit} />
}

export default CreateReview
