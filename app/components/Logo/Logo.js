import React from 'react';
import {View, ImageBackground, Text, TextInput} from 'react-native';
import styles from './styles';

//stateless component
const Logo = () => (
  <View style={styles.mainContainer}>
    <ImageBackground
      source={require('./images/acorns.jpeg')}
      style={{width: '100%', height: '100%'}}
      resizeMode='cover'>
      <View style={styles.textContainer}>
        <Text style={styles.name}>Squirreled Away</Text>
        <Text style={styles.subhead}>Your local bucket list.</Text>
        <TextInput style={styles.input}/>
        <Text style={styles.button}>SIGN IN</Text>
      </View>
    </ImageBackground>
  </View>
);

export default Logo;

//
// <View style={styles.mainContainer}>
//   <Image style={styles.containerImage}
//     source={require('./images/acorns.jpeg')}
//     resizeMode='cover'>
//     <View>
//       <Text style={styles.text}>Squirreled Away</Text>
//       <Text>Your local bucket list.</Text>
//       <TextInput style={styles.input}/>
//       <Text style={styles.button}>SIGN IN</Text>
//     </View>
//   </Image>
// </View>
