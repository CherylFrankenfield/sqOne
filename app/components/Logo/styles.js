import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  // mainContainer: {
  //   flex: 1,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // },
  containerImage: {
    flex: 1,
    flexDirection: 'column',
  },
  name: {
    color: 'white',
    fontSize: 50,
    textAlign: 'center',
  },
  subhead: {
    fontSize: 25,
    color: 'white',
    textAlign: 'center',
  },
  textContainer: {

  },
  input: {
    height: 50,
    width: '75%',
    padding: 5,
    color: 'white',
    borderWidth: 2,
    borderRadius: 5,
    borderColor: 'white',
    fontSize: 20,
  },
  button: {
    height: 50,
    width: '75%',
    backgroundColor: 'white',
    borderWidth: 2,
    borderRadius: 5,
    borderColor: 'white',
    marginBottom: 10,
    marginTop: 10,
    alignSelf: 'stretch',
    textAlign: 'center',
    fontSize: 20,
  },
});
