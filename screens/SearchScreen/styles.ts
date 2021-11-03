import { DarkTheme } from '@react-navigation/native'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  form: {
    flexDirection: 'row',
    padding: 20,
    backgroundColor: DarkTheme.colors.card
  },
  input: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
    borderColor: '#eee',
    borderWidth: 1,
    marginRight: 10,
    borderRadius: 5
  },
  button: {
    flex: 0,
    padding: 10,
    borderColor: '#fff',
    borderWidth: 0.5,
    borderRadius: 5
  },
  filter: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingTop: 13,
  },
  radio: {
    flex: 1,
    padding: 5,
    borderBottomWidth: 2,
    borderBottomColor: 'transparent'
  },
  radioActive: {
    flex: 1,
    padding: 5,
    borderBottomWidth: 2,
    borderBottomColor: '#777'
  },
  radioLabel: {
    textAlign: 'center',
    textTransform: 'uppercase'
  },
})

export default styles
