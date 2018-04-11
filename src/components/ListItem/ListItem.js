import React from 'react';
import {View,Text,StyleSheet,TouchableOpacity,Image} from 'react-native';

const listItem = props => (
  <TouchableOpacity onPress={props.onItemPressed}>
    <View style={styles.bucketlistItem}>
      <Image
        resizeMode='cover'
        source={props.bucketlistImage}
        style={styles.bucketlistImage}
      />
      <Text>{props.bucketlistName}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  bucketlistItem: {
    width: '100%',
    padding: 5
  },
  bucketlistImage: {
    height: 20,
    width: 20
  }
});

export default listItem;
