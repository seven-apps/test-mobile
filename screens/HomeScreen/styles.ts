import { StyleSheet, Dimensions } from 'react-native'

const width = Dimensions.get('screen').width
const IMAGE_SIZE = (width / 2) - 25

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    position: 'absolute',
    top: 120,
    left: 0,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    width: (width / 2) - 25
  },
  item: {
    position: 'relative'
  },
  image: {
    width: IMAGE_SIZE,
    height: IMAGE_SIZE,
    backgroundColor: '#777'
  }
})

export default styles
