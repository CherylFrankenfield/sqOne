import React from 'react';
import {View, ImageBackground, Text, TextInput, TouchableHighlight} from 'react-native';
import styles from './styles';
import {StackNavigator} from 'react-navigation';

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
            <Text style={styles.button}>LOGIN WITH GOOGLE</Text>
            <TextInput
              style={styles.input}
              placeholder="Email Address"/>
            <TouchableHighlight
              onPress={()=> this.props.navigation.navigate('Login')}>
              <Text style={styles.button}>SIGN UP</Text>
            </TouchableHighlight>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

export default Logo;
