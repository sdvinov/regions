import {
  StyleSheet
} from 'react-native'

module.exports = StyleSheet.create({
  container: {
    flex: 1
  },
  input: {
    backgroundColor: 'rgb(221,221,221)',
    height: 250,
    textAlign: 'center',
    fontSize: 180,
    color: 'rgb(51,51,51)'
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
