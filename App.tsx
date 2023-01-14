import React from 'react';
import { LogBox } from 'react-native';

import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import Navigation from './src/navigation';
import { ReactElement } from 'react';

LogBox.ignoreLogs(['Require cycle:']);

const App = (): ReactElement => {
  return (
    <SafeAreaProvider>
      <Navigation />
      <StatusBar />
    </SafeAreaProvider>
  );
};

export default App;
