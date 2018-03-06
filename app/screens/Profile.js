import React from 'react';
import {View,Text, StyleSheet} from 'react-native';
import {Avatar} from 'react-native-elements';

class Profile extends React.Component {
  render() {
    return(
      <View style={styles.mainContainer}>
        <View style={styles.profileHeader}>
          <Avatar
            xlarge
            rounded
            source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg"}}
            onPress={() => console.log("Works!")}
            activeOpacity={0.7}
            containerStyle={{flex: 2, marginLeft: 20, marginTop: 115}}
            />
        </View>
        <View style={styles.textContainer}>
          <Text>NAME: </Text>
          <Text>EDIT PASSWORD: </Text>
          <Text>EDIT EMAIL: </Text>
          <Text>SETTINGS: </Text>
          <Text>NOTIFICATIONS: </Text>
        </View>
      </View>
    );
  }
}

export default Profile;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#C8EDF3',
  },
  textContainer: {
    padding: 20,
    marginTop: 50,
  },
    profileHeader: {
    color: 'white',
    textAlign: 'center',
    backgroundColor: '#FEC0AA',
    marginTop: 50,
  },
})
