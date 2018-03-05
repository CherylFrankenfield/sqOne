import React from 'react';
import { StackNavigator, Tabs} from './config/routes';
// import {View} from 'react-native';

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
