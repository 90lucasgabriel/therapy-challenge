import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Route from 'navigation/enums';
import StackNavigator from 'navigation/StackNavigator';
import TabNavigator from 'navigation/TabNavigator';

const Stack = createNativeStackNavigator();

const AppRoutes: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName={Route.HOME}>
      <Stack.Screen name={Route.TAB_NAVIGATOR} component={TabNavigator} />
    </Stack.Navigator>
  );
};

export default AppRoutes;
