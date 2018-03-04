import React from 'react';
import {View,Text, Image} from 'react-native';
import {Card, ListItem, Button} from 'react-native-elements';
import EStyleSheet from 'react-native-extended-stylesheet';

class Event extends React.Component {
  render() {
    return (
      <Card
        title='Pedalpalooza'
        image={require('../images/pedal.jpg')}>
        <Text>Date: June 2018</Text>
        <Text>Price: 0 - Free</Text>
        <Text>Location: Bike rides around Portland, OR</Text>
        <Text style={{marginBottom: 10}}>
        Find out when Loud and Lit and Get Lost rides are this year.
        </Text>
        <Button
        icon={{name: 'code'}}
        backgroundColor='#03A9F4'
        buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
        title='VIEW NOW' />
      </Card>
    );
  }
};


export default Event;
