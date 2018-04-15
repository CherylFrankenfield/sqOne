import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import {Tabs} from './src/config/routes';
import {DrawerNav} from './src/config/routes';
// import AuthScreen from './screens/Auth';

EStyleSheet.build({
  $primaryBlue: '#4F6D7A',
});

class App extends React.Component {
  render() {
    return(
      // <Tabs />
      <DrawerNav />
    );
  }
}
export default App;
// export default () => <Tabs />;
// export default () => <StackNavigator />;
//return a function that returns a component
