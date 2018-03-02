import React from 'react';
import Home from './screens/Home';
import EStyleSheet from 'react-native-extended-stylesheet';
import StackNavigator from './config/routes';

EStyleSheet.build({
  $primaryBlue: '#4F6D7A',
});

export default () => <StackNavigator />;
//return a function that returns a component
