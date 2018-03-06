import React from 'react';
import {View, Text} from 'react-native';
import {StackNavigator} from 'react-navigation';
import Logo from '../components/Logo';

class Login extends React.Component {
  static navigationOptions = {
    title: 'Login'
  }

  render() {
    return(
      <Container>
        <Logo />
      </Container>
    );
  }
};

export default Login;



// const {navigate} = this.props.navigation

// <TouchableHighlight
//   onPress={()=> navigate('Home')}>
//   <Text>Login screen</Text>
// </TouchableHighlight>
