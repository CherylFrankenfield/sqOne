import React from 'react';
import {StackNavigator, TabNavigator, DrawerNavigator, NavigationActions} from 'react-navigation';

import Logout from '../screens/Logout';
import Settings from '../screens/Settings';
import Messages from '../screens/Messages';
import Auth from '../screens/Auth';

import Home from '../screens/Home';
import Event from '../screens/Event';
import NewEvent from '../screens/NewEvent';
import EventList from '../screens/EventList';
import Profile from '../screens/Profile';
import Icon from 'react-native-vector-icons/FontAwesome';

export const Nav = StackNavigator({
  // Home: {
  //   screen: Home,
  //   navigationOptions: ({navigation}) => ({
  //     headerLeft: <Icon name='list' size={35} onPress={ () => navigation.navigate('DrawerToggle') } />
  //   })
  // }
  Auth: {
    screen: Auth,
    navigationOptions: {
      title: 'Welcome',
    }
  }
})

export const Tabs = TabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      header: () => null,
      tabBarlabel: 'Home',
      tabBarIcon: () => ( <Icon name='home' size={30}  color={'black'}/>)
    }
  },
  EventList: {
    screen: EventList,
    navigationOptions: {
      tabBarlabel: 'List',
      tabBarIcon: () => ( <Icon name='list' size={30}  color={'black'}/>)
    }
  },
  Event: {
    screen: Event,
    navigationOptions: {
      tabBarlabel: 'Event',
      tabBarIcon: () => ( <Icon name='calendar' size={30}  color={'black'}/>)
    }
  },
  NewEvent: {
    screen: NewEvent,
    navigationOptions: {
      tabBarlabel: 'NewEvent',
      tabBarIcon: () => ( <Icon name='plus-circle' size={30}  color={'black'}/>)
    }
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      tabBarlabel: 'Profile',
      tabBarIcon: () => ( <Icon name='user' size={30}  color={'black'}/>)
    }
  },
})

export const DrawerNav = DrawerNavigator({
  Home: Tabs,
  Messages: {
    screen: Messages
  },
  Settings: {
    screen: Settings
  },
  Logout: {
    screen: Logout
  },
},{
  initialRouteName: 'Home',
  drawerPosition: 'left',
  drawerBackgroundColor:'#D9E5D6',
})
