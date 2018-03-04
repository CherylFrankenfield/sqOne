import React from 'react';
import {StackNavigator, TabNavigator} from 'react-navigation';
import Home from '../screens/Home';
import Login from '../screens/Login';
import Event from '../screens/Event';
import NewEvent from '../screens/NewEvent';
import {Icon} from 'react-native-elements';
// import Icon from 'react-native-vector-icons/MaterialIcons';

export const Tabs = TabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      header: () => null,
      tabBarlabel: 'Home',
    }
  },
  Login: {
    screen: Login,
  },
  Event: {
    screen: Event,
  },
  NewEvent: {
    screen: NewEvent,
    navigationOptions: {
      tabBarlabel: 'NewEvent',
    }
  },
});

// tabBarIcon: ({tintColor}) => <Icon name='plus' size={30} color={tintColor}/>

// export default StackNavigator({
//   Home: {
//     screen: Home,
//     navigationOptions: {
//       header: () => null,
//     },
//   },
//   Login: {
//     screen: Login,
//   },
//     initialRouteName: 'Home',
// });
