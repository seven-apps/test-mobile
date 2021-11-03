import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginHorizontal: 20,
    marginVertical: 10,
    borderColor: '#777',
    borderWidth: 0.5,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,

    elevation: 2,
  },
  icon: {
    width: 50,
    height: 50,
    marginLeft: -50,
    marginRight: 15,
    backgroundColor: '#00000030',
    alignItems: 'center',
    justifyContent: 'center'
  },
  divider: {
    marginHorizontal: 10
  },
  info: {
  },
  innerInfo: {
    flexDirection: 'row'
  },
  title: {
    fontSize: 16,
    width: 200,
    fontWeight: 'bold',
    marginBottom: 5
  },
  artist: {
    fontSize: 14,
    maxWidth: 90,
  },
  duration: {
    fontSize: 14,
    maxWidth: 90,
    opacity: 0.6
  },
  image: {
    width: 50,
    height: 50,
    backgroundColor: '#777'
  }
})

export default styles
