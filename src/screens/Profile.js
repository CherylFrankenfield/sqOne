import React from 'react';
import {View,Text, StyleSheet} from 'react-native';
import {Avatar} from 'react-native-elements';
import {Button, InputGroup, Input} from 'native-base';

class Profile extends React.Component {
  render() {
    return(
      <View style={styles.mainContainer}>
        <View style={styles.profileHeader}>
          <Avatar
            xlarge
            rounded
            source={{uri: "https://images.pexels.com/photos/206434/pexels-photo-206434.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"}}
            onPress={() => console.log("Works!")}
            activeOpacity={0.7}
            containerStyle={{flex: 2, marginLeft: 20, marginTop: 115}}
            />
        </View>
        <View style={styles.textContainer} behavior='padding'>
          <InputGroup style={styles.input} borderType='underline'>
            <Input placeholder='EDIT NAME'/>
          </InputGroup>
          <InputGroup style={styles.input} borderType='underline'>
            <Input placeholder='EDIT EMAIL'/>
          </InputGroup>
          <InputGroup style={styles.input} borderType='underline'>
            <Input placeholder='EDIT PASSWORD'/>
          </InputGroup>
          <InputGroup style={styles.input} borderType='underline'>
            <Input placeholder='SETTINGS'/>
          </InputGroup>
          <InputGroup style={styles.input} borderType='underline'>
            <Input placeholder='NOTIFICATIONS'/>
          </InputGroup>
        </View>
      </View>
    );
  }
}

export default Profile;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#C8EDF3',
    flex: 1,
  },
  textContainer: {
    padding: 20,
    marginTop: 50,
  },
    profileHeader: {
    backgroundColor: '#FEC0AA',
    marginTop: 50,
  },
})
