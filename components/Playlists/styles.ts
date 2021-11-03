import {
  Dimensions,
  StyleSheet
} from 'react-native'

const width = Dimensions.get('screen').width
const IMAGE_SIZE = (width / 2) - 25

const styles = StyleSheet.create({
  image: {
    width: IMAGE_SIZE,
    height: IMAGE_SIZE,
    backgroundColor: '#777'
  }
})

export default styles
