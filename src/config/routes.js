import React from 'react';
import {StackNavigator, TabNavigator} from 'react-navigation';
import Home from '../screens/Home';
import Event from '../screens/Event';
import NewEvent from '../screens/NewEvent';
import EventList from '../screens/EventList';
import Profile from '../screens/Profile';
import Icon from 'react-native-vector-icons/FontAwesome';

export const Tabs = TabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      header: () => null,
      tabBarlabel: 'Home',
      tabBarIcon: () => ( <Icon name="home" size={30}  color={'black'}/>)
    }
  },
  EventList: {
    screen: EventList,
    navigationOptions: {
      tabBarlabel: 'List',
      tabBarIcon: () => ( <Icon name="list" size={30}  color={'black'}/>)
    }
  },
  Event: {
    screen: Event,
    navigationOptions: {
      tabBarlabel: 'Event',
      tabBarIcon: () => ( <Icon name="calendar" size={30}  color={'black'}/>)
    }
  },
  NewEvent: {
    screen: NewEvent,
    navigationOptions: {
      tabBarlabel: 'NewEvent',
      tabBarIcon: () => ( <Icon name="plus-circle" size={30}  color={'black'}/>)
    }
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      tabBarlabel: 'Profile',
      tabBarIcon: () => ( <Icon name="user" size={30}  color={'black'}/>)
    }
  },
});
