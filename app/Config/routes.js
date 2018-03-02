import {StackNavigator} from 'react-navigation';
import Home from '../screens/Home';
import Login from '../screens/Login';


export default StackNavigator({
  Home: {
    screen: Home,
  },
  Login: {
    screen: Login,
  },
});
