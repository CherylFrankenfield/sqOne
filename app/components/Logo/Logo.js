import React from 'react';
import {View, Image, Text} from 'react-native';
import styles from './styles';

//stateless component
const Logo = () => (
  <View style={styles.container}>
      <Image resizeMode='contain' source={require('./images/acorns.jpeg')}>
      </Image>
    <Text>Splash Page</Text>
  </View>
);

export default Logo;

// <Image source={require('./images/background.png')}>
