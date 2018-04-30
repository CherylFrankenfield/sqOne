import React from 'react';
import {View,Text,Image,Modal,StyleSheet} from 'react-native';
import {Card,ListItem,Button} from 'react-native-elements';

const Event = props => {

    return (
      <Card
        title='Pedalpalooza'
        image={require('../images/pedal.jpg')}>
        <Text style={{marginBottom: 10}}>
        Find out when Loud and Lit and Get Lost rides are this year. Also find out when Bowie vs. Prince ride is?
        </Text>
        <Text style={{marginBottom: 10}}> $0 - Free</Text>
        <Text style={{marginBottom: 10}}> Portland, OR </Text>
        <Button
          backgroundColor='#03A9F4'
          buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
          title='VIEW MORE' />
      </Card>
    );

};

export default Event;


const styles = StyleSheet.create({
  modalContainer: {
    margin: 20
  },
  bucketlistImage: {
    width: '100%',
    height: 200
  },
  bucketlistItem: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 25
  }
});
