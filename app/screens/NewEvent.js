import React from 'react';
import {View,Text} from 'react-native';
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
          <Button primary><Text> ADD EVENT </Text></Button>
        </Content>
      </Container>
    );
  }
}

export default NewEvent;
