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
            <TouchableHighlight
              onPress={()=> this.props.navigation.navigate('Home')}>
              <Button style={styles.button} block><Text> LOGIN WITH GOOGLE </Text></Button>
            </TouchableHighlight>
            <InputGroup style={styles.input} borderType='underline'>
              <Input placeholder='Email address'/>
            </InputGroup>
            <InputGroup style={styles.input} borderType='underline'>
              <Input placeholder='Password'/>
            </InputGroup>
            <TouchableHighlight
              onPress={()=> this.props.navigation.navigate('Home')}>
              <Button block><Text> Login </Text></Button>
            </TouchableHighlight>
            <Text style={styles.signup}>Don't have an account? Sign up here.</Text>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

export default Logo;
