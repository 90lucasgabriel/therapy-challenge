import React, { ReactElement } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ProfileScreen } from 'screens';

import Route from 'navigation/enums';

const Stack = createNativeStackNavigator();

const ProfileNavigator = (): ReactElement => {
  return (
    <Stack.Navigator
      initialRouteName={Route.PROFILE}
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name={Route.PROFILE} component={ProfileScreen} />
    </Stack.Navigator>
  );
};

export default ProfileNavigator;
