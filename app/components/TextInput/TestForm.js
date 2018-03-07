import React from 'react';
import {View, Text, Alert, StyleSheet, TouchableOpacity, TextInput} from 'react-native';

class TestForm extends React.Component {
  state= {}

  renderTextField(options){
    return(
      <TextInput
        style={styles.textfield}
        onChangeText={(value) => this.setState({[options.name]:value})}
        placeholder={options.label}
        value={this.state[options.name]}
        keyboardType={options.keyboard || 'default'}
      />
    );
  }

  renderButton() {
    return(
      <TouchableOpacity
        onPress={this.onPressButton}
        style={styles.btn}>
        <Text>Add</Text>
      </TouchableOpacity>
    );
  }

  onPressButton = () => {
    const {name,date,price,location,notes} = this.state;
    Alert.alert('User data', `Name: ${name}, Date: ${date}, Price: ${price}, Location: ${location}, Notes: ${notes}`);
  }


  render() {
    return(
      <View style={styles.container}>
        <Text style={styles.instructions}>Please enter a new event:</Text>
        {this.renderTextField({name: 'name', label: 'New Bucket List Item', keyboard: 'default'})}
        {this.renderTextField({name: 'date', label: 'Date'})}
        {this.renderTextField({name: 'price', label: 'Price'})}
        {this.renderTextField({name: 'location', label: 'Location'})}
        {this.renderTextField({name: 'notes', label: 'Add Notes'})}
        {this.renderButton()}
      </View>
    );
  }
}

export default TestForm;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'honeydew';
    borderRadius: 3,
    padding: 10,
    marginBottom: 20,
  },
  instructions: {
    color: 'gray';
    fontSize: 20,
    marginTop: 20,
    marginBottom: 20,
  },
});
