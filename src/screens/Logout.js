import React, {Component} from 'react';
import {View,Text,Button} from 'react-native';

class Logout extends Component {

  render() {
    return(
      <View>
        <Text>Log Out Screen</Text>
        <Button title='Logout' />
      </View>
    );
  }
}

export default Logout;
