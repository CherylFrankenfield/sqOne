import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import {Tabs} from './config/routes';
// import AuthScreen from './screens/Auth';

EStyleSheet.build({
  $primaryBlue: '#4F6D7A',
});

export default () => <Tabs />;
// export default () => <StackNavigator />;
//return a function that returns a component
