import React, {Component} from 'react';
import {View,Text,Button} from 'react-native';

class Page1 extends Component {

  render() {
    return(
      <View>
        <Text>Page 1 Drawer</Text>
        <Button title='Logout' />
      </View>
    );
  }
}

export default Page1;
