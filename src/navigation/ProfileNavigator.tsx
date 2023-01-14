import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ProfileScreen, SigninScreen, SignupScreen } from 'screens';

import Route from 'navigation/enums';
import { useAuth } from 'domains/Auth/hooks';

const Stack = createNativeStackNavigator();

const ProfileNavigator = () => {
  const { user } = useAuth();

  return (
    <Stack.Navigator
      initialRouteName={Route.PROFILE}
      screenOptions={{ headerShown: false }}>
      {user ? (
        <Stack.Screen name={Route.PROFILE} component={ProfileScreen} />
      ) : (
        <>
          <Stack.Screen name={Route.SIGNIN} component={SigninScreen} />
          <Stack.Screen name={Route.SIGNUP} component={SignupScreen} />
        </>
      )}
    </Stack.Navigator>
  );
};

export default ProfileNavigator;
