import { StyleSheet } from 'react-native'
import { useField } from 'formik'

import TextInput from './TextInput'
import Text from './Text'

import theme from '../theme'

const styles = StyleSheet.create({
  errorText: {
    color: '#d73a4a',
    marginTop: 5,
    marginLeft: 10
  },
  input: {
    padding: 15,
    margin: 10,
    borderRadius: 5,
    borderWidth: 2,
    overflow: 'hidden',
    borderColor: theme.colors.mainBackground,
  },
})

const FormikTextInput = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name)
  const showError = meta.touched && meta.error

  return (
    <>
      {showError && <Text style={styles.errorText}>{meta.error}</Text>}
      <TextInput
        style={styles.input}
        onChangeText={(value) => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        error={showError}
        {...props}
      />
    </>
  )
}

export default FormikTextInput
