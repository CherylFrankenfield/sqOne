import React, {Component} from 'react';
import {Stylesheet, EStyleSheet, View, Text, FlatList} from 'react-native';
import styles from './styles';

class EventList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bucketlist: [
        { key: 1,
          name: 'Pickathon',
          date: '05/03/2018',
          price: 322,
          location: 'Pendarvis Farm',
          notes: 'Call Rachel. Buy tickets for festival.',
          keywords: '',
          status: 'active'
        },
        { key: 2,
          name: 'Roller Derby',
          date: '10/12/2018',
          price: 10,
          location: 'Oaks Bottom',
          notes: 'Go see Amy and team this Fall.',
          keywords: '',
          status: 'active'
        },
        { key: 3,
          name: 'Portland Meadows - Horse Race',
          date: '09/17/2018',
          price: 8,
          location: 'Portland Meadows',
          notes: 'Get group of friends together to go to the track.',
          keywords: '',
          status: 'active'
        }
      ]
    };
  }

  _renderItem = data => {
    return <Text>{bucketlist.item.key}</Text>;
  };

  render() {
    return(
      <View style={styles.container}>
        <FlatList data={this.state.bucketlist} renderItem={this._renderItem} />
      <View>
    );
  }


};

export default EventList;
