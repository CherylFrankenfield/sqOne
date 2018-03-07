import React from 'react';
import {View,Text,ScrollView} from 'react-native';
import {Container, InputGroup, Input, Button} from 'native-base';
import {InputNewBucketItem} from '../components/TextInput';
import {TestForm} from '../components/TextInput';

class NewEvent extends React.Component {

  render() {
    return (
      <ScrollView>
        <TestForm />
      </ScrollView>
    );
  }
}

export default NewEvent;


// <InputNewBucketItem/>
