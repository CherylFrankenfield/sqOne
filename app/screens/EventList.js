import React from 'react';
import {Text, View, ScrollView} from 'react-native';
// import {List, ListItem} from 'react-native-elements;'

class EventList extends React.Component {
  render(){
    return(
      <ScrollView>
        <List>
          <ListItem>
            <Text>stuff</Text>
          </ListItem>
        </List>
      </ScrollView>
    );
  }
};

export default EventList;
