import React from 'react';
import {View, Text} from 'react-native';
import {StackNavigator} from 'react-navigation';

class Login extends React.Component {
  static navigationOptions = {
    title: 'Login'
  }

  render() {
    return(
      <View>
        <Text>Login screen</Text>
      </View>
    );
  }
};

export default Login;



// const {navigate} = this.props.navigation

// <TouchableHighlight
//   onPress={()=> navigate('Home')}>
//   <Text>Login screen</Text>
// </TouchableHighlight>
