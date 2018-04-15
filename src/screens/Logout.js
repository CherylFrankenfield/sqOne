import React, {Component} from 'react';
import {View,Text,Button} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class Logout extends Component {
  static navigationOptions = {
    drawerLabel: 'Logout',
    drawerIcon: () => (
      <Icon
        name='sign-out'
        size={25}
        color={'black'}
      />
    )
  }

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
