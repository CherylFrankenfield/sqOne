import React from 'react';
import {View, Image, Text} from 'react-native';
import styles from './styles';

//stateless component
const Logo = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Splash Page</Text>
    <Image
      style={{
      flex: 1,
      alignSelf: 'stretch',
      width: undefined,
      height: undefined
    }}
   source={require('./images/acorns.jpeg')}>
    </Image>
  </View>
);

export default Logo;

// <Image source={require('./images/background.png')}>
