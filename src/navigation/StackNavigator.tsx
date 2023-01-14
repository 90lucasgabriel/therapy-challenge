import React, { ReactElement } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { HomeScreen } from 'screens';

import Route from 'navigation/enums';

const Stack = createNativeStackNavigator();

const StackNavigator = (): ReactElement => {
  return (
    <Stack.Navigator
      initialRouteName={Route.HOME}
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name={Route.HOME} component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
