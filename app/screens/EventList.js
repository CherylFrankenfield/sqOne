import React from 'react';
import {Text, FlatList, View, StyleSheet} from 'react-native';
import { Container, Content, List, ListItem, Thumbnail} from 'native-base';

const rows = [
  {id: 0, text: 'Movies'},
  {id: 1, text: 'Restaurants'},
  {id: 2, text: 'Music'},
  {id: 3, text: 'Arts/Museums'},
  {id: 4, text: 'Outdoors'},
]

const extractKey = ({id}) => id

class EventList extends React.Component {

  renderItem = ({item}) => {
    return (
      <View>
        <Text style={styles.row}>{item.text}</Text>
      </View>
    );
  }

  render(){
    return(
      <FlatList
        style={styles.container}
        data={rows}
        renderItem={this.renderItem}
        keyExtractor={extractKey}
      />
    );
  }
};

export default EventList;

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
    flex: 1,
  },
  row: {
    padding: 15,
    marginBottom: 5,
    backgroundColor: '#D8A931',
  },
})

// <Container>
//   <Content>
//       <List>
//         <ListItem>
//           <Thumbnail square size={80} source={require('../images/mushroom.jpg')} />
//           <Text>Mushroom Hunting</Text>
//           <Text note> --Fall</Text>
//         </ListItem>
//         <ListItem>
//           <Thumbnail square size={80} source={require('../images/pedal.jpg')} />
//           <Text>Pedalpalooza</Text>
//           <Text note> --June 2018</Text>
//         </ListItem>
//         <ListItem>
//           <Thumbnail square size={80} source={require('../images/enchantments.jpg')} />
//           <Text>Trail Run The Enchantments</Text>
//           <Text note> --Fall</Text>
//         </ListItem>
//         <ListItem>
//           <Thumbnail square size={80} source={require('../images/alpenrose.jpg')} />
//           <Text>Velodrome Track</Text>
//           <Text note> --August</Text>
//         </ListItem>
//         <ListItem>
//           <Thumbnail square size={80} source={require('../images/Mt_Adams.jpg')} />
//           <Text>Climb Mt. Adams</Text>
//           <Text note> --June/July</Text>
//         </ListItem>
//         <ListItem>
//           <Thumbnail square size={80} source={require('../images/Mt_Adams.jpg')} />
//           <Text>Climb Mt. Adams</Text>
//           <Text note> --June/July</Text>
//         </ListItem>
//         <ListItem>
//           <Thumbnail square size={80} source={require('../images/Mt_Adams.jpg')} />
//           <Text>Climb Mt. Adams</Text>
//           <Text note> --June/July</Text>
//         </ListItem>
//         <ListItem>
//           <Thumbnail square size={80} source={require('../images/Mt_Adams.jpg')} />
//           <Text>Climb Mt. Adams</Text>
//           <Text note> --June/July</Text>
//         </ListItem>
//         <ListItem>
//           <Thumbnail square size={80} source={require('../images/Mt_Adams.jpg')} />
//           <Text>Climb Mt. Adams</Text>
//           <Text note> --June/July</Text>
//         </ListItem>
//         <ListItem>
//           <Thumbnail square size={80} source={require('../images/Mt_Adams.jpg')} />
//           <Text>Climb Mt. Adams</Text>
//           <Text note> --June/July</Text>
//         </ListItem>
//       </List>
//   </Content>
// </Container>
