import React from 'react';
import {View,Text,Button,Image,StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Container,Content,List,ListItem,Left,Body,Right,Thumbnail} from 'native-base';

class Messages extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Messages',
    drawerIcon: () => (
      <Icon
        name='comments'
        size={25}
        color={'black'}
      />
    )
  }

  render() {
    return(
      <Container style={styles.messagesContainer}>
        <Content>
          <List>
            <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg' }} />
              </Left>
              <Body>
                <Text>Zoo Lander</Text>
                <Text note>Doing what you like will always keep you happy . .</Text>
              </Body>
              <Right>
                <Text note>3:43 pm</Text>
              </Right>
            </ListItem>
            <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg' }} />
              </Left>
              <Body>
                <Text>Sterling Archer</Text>
                <Text note>I’m not saying I invented the turtleneck, but I was the first person to realize its potential as a tactical garment. The tactical turtleneck! The … tactleneck.</Text>
              </Body>
              <Right>
                <Text note>5:31 pm</Text>
              </Right>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  messagesContainer: {
    marginTop: 60,
    justifyContent: 'space-between',
    width: '100%',
  }
});

export default Messages;
