import React from 'react';
import {View,Text,Button,StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class Logout extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Logout',
    drawerIcon: () => (
      <Icon
        name='sign-out'
        size={25}
        color={'black'}
      />
    )
  }

  render() {
    return(
      <View style={styles.logoutContainer}>
        <Text>Log out of SquirreledAway</Text>
        <Button
          title='Logout'
          style={styles.logoutButton}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  logoutContainer: {
    marginTop: 40,
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  logoutButton: {
    marginTop: 10,
    width: '30%',
  }
});


export default Logout;
