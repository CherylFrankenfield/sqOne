import React from 'react';
import {View,Text,StyleSheet, TouchableHighlight} from 'react-native';
import {Container, InputGroup, Input, Button} from 'native-base';
// import InputNewBucketItem from '../components/TextInput';

class NewEvent extends React.Component {
  state = {
    eventName: ''
  };

  eventNameChangedHandler = val => {
    this.setState({
      eventName: val
    });
  };

  eventSubmitHandler = () => {
    if (this.state.eventName.trim() === '') {
      return;
    }
    this.props.onEventAdded(this.state.eventName);
    // this.setState(prevState => {
    //   return {
    //     bucketlist: prevState.bucketlist.concat(prevState.eventName)
    //   };
    // });
  };

  render() {
    return (
      <View style={styles.inputContainer}>
        <InputGroup
          borderType='underline'
          style={styles.eventInput}>
          <Input
            placeholder='New Bucket List Item:'
            value={this.state.eventName}
            onChangeText={this.eventNameChangedHandler}
          />
        </InputGroup>
        <TouchableHighlight>
          <Button
            style={styles.eventButton}
            onPress={this.eventSubmitHandler}>
            <Text> ADD EVENT </Text>
          </Button>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 40,
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%'
  },
  eventButton: {
    marginTop: 10,
    width: '30%',
  },
  eventInput: {
    marginTop: 10,
    width: '85%'
  }
});

export default NewEvent;



//Integrate other input later:
// <Input placeholder='Date:'/>
// <Input placeholder='Price:'/>
// <Input placeholder='Location:'/>
// <Input placeholder='Notes:'/>
