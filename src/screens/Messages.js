import React from 'react';
import {View,Text,Button,Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class Messages extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Messages',
    drawerIcon: () => (
      <Icon
        name='comments'
        size={25}
        color={'black'}
      />
    )
  }

  render() {
    return(
      <View>
        <Text>Messages Screen</Text>
      </View>
    );
  }
}

export default Messages;
