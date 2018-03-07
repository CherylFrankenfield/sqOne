import React from 'react';
import {View,Text,ScrollView, StyleSheet} from 'react-native';
import {Container, InputGroup, Input, Button} from 'native-base';
import InputNewBucketItem from '../components/TextInput';
import TestForm from '../components/TextInput';

class NewEvent extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scrollContainer}>
          <TestForm />
        </ScrollView>
      </View>
    );
  }
}

export default NewEvent;


// <InputNewBucketItem/>

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ecf0f1',
    flex: 1,
  },
  scrollContainer: {
    padding: 15,
  },
});
