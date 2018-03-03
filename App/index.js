import React from 'react';
import Home from './screens/Home';
import EStyleSheet from 'react-native-extended-stylesheet';
import { StackNavigator, Tabs} from './config/routes';

EStyleSheet.build({
  $primaryBlue: '#4F6D7A',
});

class App extends React.Component {
  render() {
    return(
      <Tabs />
    );
  }
}

export default App;
// export default () => <StackNavigator />;
//return a function that returns a component
