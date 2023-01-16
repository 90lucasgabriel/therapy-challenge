import React, { ReactElement } from 'react';
import { LogBox } from 'react-native';

import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { Navigation } from 'navigation';
import AppProvider from 'hooks';

LogBox.ignoreLogs(['Require cycle:']);

const App = (): ReactElement => {
  return (
    <AppProvider>
      <SafeAreaProvider>
        <Navigation />
        <StatusBar />
      </SafeAreaProvider>
    </AppProvider>
  );
};

export default App;
