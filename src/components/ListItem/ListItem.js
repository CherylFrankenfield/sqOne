import React from 'react';
import {View,Text,TouchableOpacity,Image} from 'react-native';
import styles from './styles';

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

export default listItem;
