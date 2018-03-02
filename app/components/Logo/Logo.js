import React from 'react';
import {View, Image, Text, TextInput} from 'react-native';
import styles from './styles';

//stateless component
const Logo = () => (
  <View style={styles.mainContainer}>
    <Text style={styles.text}>Squirreled Away</Text>
    <Text>Your local bucket list.</Text>
    <TextInput style={styles.input}/>
    <Text style={styles.button}>SIGN IN</Text>
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
