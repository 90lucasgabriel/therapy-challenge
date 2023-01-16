import React, { ReactElement } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Theme } from 'shared/styles';
import { HomeScreen } from 'screens';

import Route from 'navigation/enums';

const Stack = createNativeStackNavigator();

const HomeNavigator = (): ReactElement => {
  return (
    <Stack.Navigator
      initialRouteName={Route.HOME}
      screenOptions={{
        headerTintColor: Theme.colors.white,
        headerStyle: {
          backgroundColor: Theme.colors.primary,
        },
        title: 'Vittude',
        headerTitle: 'Vittude',
      }}>
      <Stack.Screen name={Route.HOME} component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
