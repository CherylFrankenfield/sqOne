import React, {Component} from 'react';
import {View,Text,Button} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class Settings extends Component {
  static navigationOptions = {
    drawerLabel: 'Settings',
    drawerIcon: () => (
      <Icon
        name='cog'
        size={25}
        color={'black'}
      />
    )
  }
  render() {
    return(
      <View>
        <Text>Settings</Text>
        <Button title='Settings' />
      </View>
    );
  }
}

export default Settings;
