import React from 'react';
import {View,Text, TouchableHighlight} from 'react-native';
import {Container, Content, InputGroup, Input, Button} from 'native-base';

class NewEvent extends React.Component {
  render(){
    return(
      <Container>
        <Content>
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
        </Content>
      </Container>
    );
  }
}

export default NewEvent;
