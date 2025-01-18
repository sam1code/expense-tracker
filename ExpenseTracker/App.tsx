import React from 'react';
import AppNavigator from './App.navigator';
import {StatusBar} from 'react-native';

function App(): React.JSX.Element {
  return (
    <React.Fragment>
      <StatusBar backgroundColor="blue" barStyle="light-content" />
      <AppNavigator />
    </React.Fragment>
  );
}

export default App;
