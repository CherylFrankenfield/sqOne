import React from 'react';
import {View,Text, StyleSheet} from 'react-native';
import {Avatar} from 'react-native-elements';

class Profile extends React.Component {
  render() {
    return(
      <View style={styles.profileHeader}>
        <Avatar
          xlarge
          rounded
          source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg"}}
          onPress={() => console.log("Works!")}
          activeOpacity={0.7}
        />
        <Text>Profile Name: </Text>
      </View>
    );
  }
}

export default Profile;

const styles = StyleSheet.create({
  profileHeader: {
    color: 'white',
    textAlign: 'center',
    backgroundColor: '#FEC0AA',
    marginTop: 50,
  },
})
