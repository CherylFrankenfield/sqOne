import React from 'react';
import {StackNavigator, TabNavigator} from 'react-navigation';
import Home from '../screens/Home';
import Event from '../screens/Event';
import NewEvent from '../screens/NewEvent';
import EventList from '../screens/EventList';
import Profile from '../screens/Profile';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import Login from '../screens/Login';
// import {Icon} from 'react-native-elements';
// import Icon from 'react-native-vector-icons/MaterialIcons';

export const Tabs = TabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      header: () => null,
      tabBarlabel: 'Home',
    }
  },
  EventList: {
    screen: EventList,
    navigationOptions: {
      header: {
        visible: true,
        title: 'Bucket List',
      }
    }
  },
  Event: {
    screen: Event,
    navigationOptions: {
      tabBarlabel: 'Event',
    }
  },
  NewEvent: {
    screen: NewEvent,
    navigationOptions: {
      tabBarlabel: 'NewEvent',
    }
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      tabBarlabel: 'Profile',
    }
  },
});

// tabBarIcon: ({tintColor}) => <Icon name='plus' size={30} color={tintColor}/>

// export const Stacks = StackNavigator({
//   Home: {
//     screen: Home,
//   },
//   Login: {
//     screen: Login,
//   },
// });
