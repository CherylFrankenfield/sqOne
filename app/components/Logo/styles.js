import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  mainContainer: {
    // display: 'flex',
    // flexDirection: 'row',
  },
  containerImage: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 30,
  },
  input: {
    height: 50,
    padding: 5,
    color: 'white',
    borderWidth: 2,
    borderRadius: 5,
  },
  button: {
    height: 50,
    backgroundColor: 'white',
    borderWidth: 2,
    borderRadius: 5,
    borderColor: 'white',
  }
});
