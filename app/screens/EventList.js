import React from 'react';
import {Text} from 'react-native';
import { Container, Content, List, ListItem, Thumbnail} from 'native-base';

class EventList extends React.Component {
  render(){
    return(
      <Container>
        <Content>
            <List>
              <ListItem>
                <Thumbnail square size={80} source={require('../images/mushroom.jpg')} />
                <Text>Mushroom Hunting</Text>
                <Text note> --Fall</Text>
              </ListItem>
              <ListItem>
                <Thumbnail square size={80} source={require('../images/pedal.jpg')} />
                <Text>Pedalpalooza</Text>
                <Text note> --June 2018</Text>
              </ListItem>
              <ListItem>
                <Thumbnail square size={80} source={require('../images/enchantments.jpg')} />
                <Text>Trail Run The Enchantments</Text>
                <Text note> --Fall</Text>
              </ListItem>
              <ListItem>
                <Thumbnail square size={80} source={require('../images/alpenrose.jpg')} />
                <Text>Velodrome Track</Text>
                <Text note> --August</Text>
              </ListItem>
              <ListItem>
                <Thumbnail square size={80} source={require('../images/Mt_Adams.jpg')} />
                <Text>Climb Mt. Adams</Text>
                <Text note> --June/July</Text>
              </ListItem>
              <ListItem>
                <Thumbnail square size={80} source={require('../images/Mt_Adams.jpg')} />
                <Text>Climb Mt. Adams</Text>
                <Text note> --June/July</Text>
              </ListItem>
              <ListItem>
                <Thumbnail square size={80} source={require('../images/Mt_Adams.jpg')} />
                <Text>Climb Mt. Adams</Text>
                <Text note> --June/July</Text>
              </ListItem>
              <ListItem>
                <Thumbnail square size={80} source={require('../images/Mt_Adams.jpg')} />
                <Text>Climb Mt. Adams</Text>
                <Text note> --June/July</Text>
              </ListItem>
              <ListItem>
                <Thumbnail square size={80} source={require('../images/Mt_Adams.jpg')} />
                <Text>Climb Mt. Adams</Text>
                <Text note> --June/July</Text>
              </ListItem>
              <ListItem>
                <Thumbnail square size={80} source={require('../images/Mt_Adams.jpg')} />
                <Text>Climb Mt. Adams</Text>
                <Text note> --June/July</Text>
              </ListItem>
            </List>
        </Content>
      </Container>
    );
  }
};

export default EventList;
