import {StackNavigator, TabNavigator} from 'react-navigation';
import Home from '../screens/Home';
import Login from '../screens/Login';
import {Icon} from 'react-native-elements';

export const Tabs = TabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      header: () => null,
      tabBar: {
        label: 'Home',
        icon: ({tintColor}) => <Icon name='list' size={30} color={tintColor}/>
      }
    },
  },
  Login: {
    screen: Login,
  },
  EventList: {
    screen: EventDetail,
  },
  Event: {
    screen: Event,
  },
  NewEvent: {
    screen: NewEvent,
    tabBar: {
      label: 'Home',
      icon: ({tintColor}) => <Icon name='plus' size={30} color={tintColor}/>
    }
  },
});



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
