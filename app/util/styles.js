import {
  StyleSheet
} from 'react-native'

module.exports = StyleSheet.create({
  container: {
    flex: 1
  },
  input: {
    backgroundColor: '#eeeeee',
    height: 250,
    textAlign: 'center',
    fontSize: 180,
    color: '#222222'
  },
  regionName: {
    marginHorizontal: 20,
    flex: 3,
    fontSize: 30,
    alignSelf: 'stretch',
    textAlign: 'center',
    justifyContent: 'center',
    fontFamily: 'Avenir',
    color: '#ddd'
  },
  stateName: {
    flex: 1,
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'Avenir',
    color: '#ddd'
  },
})
