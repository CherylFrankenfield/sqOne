import React from 'react';
import {View,Text,Button,StyleSheet} from 'react-native';
import {Container,Content,List,ListItem,Left,Body,Right,Switch} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';

class Settings extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Settings',
    drawerIcon: () => (
      <Icon
        name='cog'
        size={25}
        color={'black'}
      />
    )
  }
  render() {
    return(
      <Container style={styles.settingsContainer}>
       <Content>
         <List>
           <ListItem icon>
             <Left>
               <Icon name='bell' />
             </Left>
             <Body>
               <Text>Notifications</Text>
             </Body>
             <Right>
               <Switch value={false} />
             </Right>
           </ListItem>
           <ListItem icon>
             <Left>
               <Icon name='file' />
             </Left>
             <Body>
               <Text>Terms of Service</Text>
             </Body>
             <Right>
               <Icon name='angle-right' />
             </Right>
           </ListItem>
           <ListItem icon>
             <Left>
               <Icon name='paperclip' />
             </Left>
             <Body>
               <Text>Version: </Text>
             </Body>
           </ListItem>
           <ListItem icon>
             <Left>
               <Icon name='archive' />
             </Left>
             <Body>
               <Text>Archived Bucketlist</Text>
             </Body>
             <Right>
               <Icon name='angle-right' />
             </Right>
           </ListItem>
           <ListItem icon>
             <Left>
               <Icon name='info' />
             </Left>
             <Body>
               <Text>Help</Text>
             </Body>
             <Right>
               <Icon name='angle-right' />
             </Right>
           </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  settingsContainer: {
    marginTop: 60,
    justifyContent: 'space-between',
    width: '100%',
  }
});

export default Settings;
