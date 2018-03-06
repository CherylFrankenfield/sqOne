import React from 'react';
import {View, Text, TouchableHighlight, TextInput, StyleSheet, TouchableOpacity} from 'react-native';
// import styles from './styles'
import {Container, InputGroup, Input, Button} from 'native-base';

class InputNewBucketItem extends React.Component {
  handleSubmit(text, field) {
    console.log(text);
  }

  render() {
    return(
      <View style={styles.container}>
        <TextInput
          placeholder='test'
          onSubmit={(text) => this.handleSubmit(text,i)}
        />
        <TouchableOpacity>
          <Button block><Text> ADD EVENT </Text></Button>
        </TouchableOpacity>
      </View>
    );
  }
}

export default InputNewBucketItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'honeydew',
    justifyContent: 'center',
  },
})
// <View>
//   <InputGroup borderType='underline'>
//     <Input placeholder='New Bucket List Item:'/>
//   </InputGroup>
//   <InputGroup borderType='underline'>
//     <Input placeholder='Date:'/>
//   </InputGroup>
//   <InputGroup borderType='underline'>
//     <Input placeholder='Price:'/>
//   </InputGroup>
//   <InputGroup borderType='underline'>
//     <Input placeholder='Location:'/>
//   </InputGroup>
//   <InputGroup borderType='underline'>
//     <Input placeholder='Notes:'/>
//   </InputGroup>
//   <TouchableHighlight>
//     <Button block><Text> ADD EVENT </Text></Button>
//   </TouchableHighlight>
// </View>
