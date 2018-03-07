import React from 'react';
import {View,Text,StyleSheet, TouchableHighlight} from 'react-native';
import {Container, InputGroup, Input, Button} from 'native-base';
// import InputNewBucketItem from '../components/TextInput';

class NewEvent extends React.Component {
  render() {
    return (
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

export default NewEvent;
