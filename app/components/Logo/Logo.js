import React from 'react';
import {View, ImageBackground, Text, TextInput, TouchableHighlight} from 'react-native';
import styles from './styles';
import {StackNavigator} from 'react-navigation';
import {Button, InputGroup, Input} from 'native-base';

//stateless component
class Logo extends React.Component {
  render() {
    return(
      <View style={styles.mainContainer}>
        <ImageBackground
          source={require('./images/acorns.jpeg')}
          style={{width: '100%', height: '100%'}}
          resizeMode='cover'>
          <View style={styles.textContainer}>
            <Text style={styles.name}>Squirreled Away</Text>
            <Text style={styles.subhead}>Your local bucket list.</Text>
            <Button style={styles.button} block><Text> LOGIN WITH GOOGLE </Text></Button>
            <InputGroup style={styles.input} borderType='underline'>
              <Input placeholder='Email address'/>
            </InputGroup>
            <TouchableHighlight
              onPress={()=> this.props.navigation.navigate('Login')}>
            <Button block><Text> SIGNUP </Text></Button>
            </TouchableHighlight>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

export default Logo;

// <View style={styles.mainContainer}>
//   <ImageBackground
//     source={require('./images/acorns.jpeg')}
//     style={{width: '100%', height: '100%'}}
//     resizeMode='cover'>
//     <View style={styles.textContainer}>
//       <Text style={styles.name}>Squirreled Away</Text>
//       <Text style={styles.subhead}>Your local bucket list.</Text>
//       <Text style={styles.button}>LOGIN WITH GOOGLE</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Email Address"/>
//       <TouchableHighlight
//         onPress={()=> this.props.navigation.navigate('Login')}>
//         <Text style={styles.button}>SIGN UP</Text>
//       </TouchableHighlight>
//     </View>
//   </ImageBackground>
// </View>
