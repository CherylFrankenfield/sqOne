import React from 'react';
import {View,Text,Image} from 'react-native';
import { Container, Header, Content, CardItem, Thumbnail, Left, Body } from 'native-base';
import {Card, ListItem, Button} from 'react-native-elements';

import EStyleSheet from 'react-native-extended-stylesheet';

class Event extends React.Component {
  render() {
    return (
      <Card
        title='Pedalpalooza'
        image={require('../images/pedal.jpg')}>
        <Text style={{marginBottom: 10}}>
        Find out when Loud and Lit and Get Lost rides are this year. Also find out when Bowie vs. Prince ride is?
        </Text>
        <Text style={{marginBottom: 10}}> $0 - Free </Text>
        <Text style={{marginBottom: 10}}> Portland, OR </Text>
        <Button
        backgroundColor='#03A9F4'
        buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
        title='VIEW MORE' />
    </Card>
    );
  }
};


export default Event;

// styles for using Native Base UI Library:
// <Container>
//  <Content>
//    <Card style={{flex: 0}}>
//      <CardItem>
//        <Left>
//          <Body>
//            <Text>Pedalpalooza</Text>
//            <Text note>June 2018</Text>
//          </Body>
//        </Left>
//      </CardItem>
//      <CardItem>
//        <Body>
//          <Image source={require('../images/pedal.jpg')} style={{height: 300, width: 300, flex: 1}}/>
//          <Text>
//            Find out when Loud and Lit and Get Lost rides are this year.
//          </Text>
//        </Body>
//      </CardItem>
//      <CardItem>
//        <Left>
//          <Button transparent textStyle={{color: '#87838B'}}>
//            <Text>$0 - Free    </Text>
//            <Text>Portland, OR    </Text>
//          </Button>
//        </Left>
//      </CardItem>
//    </Card>
//  </Content>
// </Container>
