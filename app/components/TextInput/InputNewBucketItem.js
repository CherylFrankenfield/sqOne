import React, {PropTypes} from 'react';
import {View, Text, TouchableHighlight, TextInput} from 'react-native';
import styles from './styles'
import {Container, InputGroup, Input, Button} from 'native-base';

class InputNewBucketItem extends React.Component {
  render() {
    return(
      <View>
        <InputGroup borderType='underline'>
          <Input placeholder='New Bucket List Item:'/>
        </InputGroup>
        <InputGroup borderType='underline'>
          <Input placeholder='Date:'/>
        </InputGroup>
        <InputGroup borderType='underline'>
          <Input placeholder='Price:'/>
        </InputGroup>
        <InputGroup borderType='underline'>
          <Input placeholder='Location:'/>
        </InputGroup>
        <InputGroup borderType='underline'>
          <Input placeholder='Notes:'/>
        </InputGroup>
        <TouchableHighlight>
          <Button block><Text> ADD EVENT </Text></Button>
        </TouchableHighlight>
      </View>
    );
  }
}

export default InputNewBucketItem;
