import React from 'react';
import {View, StatusBar } from 'react-native';
import {Container} from '../components/Container';
import {Logo} from '../components/Logo';
import {Header,Left,Icon} from 'native-base';

export default () => (
  <Container>
    <Header>
      <Left>
        <Icon
          name='ios-menu'
          onPress={() => this.props.navigation.navigate('Messages')}
        />
      </Left>
    </Header>
    <StatusBar
      translucent={false}
      barStyle='light-content' 
    />
    <Logo />
    <View />
  </Container>
);
