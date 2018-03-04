import React from 'react';
import {View,Text,Image} from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Button, Icon, Left, Body } from 'native-base';
// import {Card, ListItem, Button} from 'react-native-elements';

import EStyleSheet from 'react-native-extended-stylesheet';

class Event extends React.Component {
  render() {
    return (
      <Container>
       <Content>
         <Card style={{flex: 0}}>
           <CardItem>
             <Left>
               <Body>
                 <Text>Pedalpalooza</Text>
                 <Text note>June 2018</Text>
               </Body>
             </Left>
           </CardItem>
           <CardItem>
             <Body>
               <Image source={{uri: '../images/pedal.jpg'}} style={{height: 200, width: 200, flex: 1}}/>
               <Text>
                 Find out when Loud and Lit and Get Lost rides are this year.
               </Text>
             </Body>
           </CardItem>
           <CardItem>
             <Left>
               <Button transparent textStyle={{color: '#87838B'}}>
                 <Text>$0 - Free    </Text>
                 <Text>Portland, OR    </Text>
               </Button>
             </Left>
           </CardItem>
         </Card>
       </Content>
      </Container>
    );
  }
};


export default Event;
