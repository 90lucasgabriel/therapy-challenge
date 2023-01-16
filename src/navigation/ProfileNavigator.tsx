import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ProfileScreen, SigninScreen, SignupScreen } from 'screens';

import Route from 'navigation/enums';
import { Theme } from 'shared/styles';
import { useAuth } from 'domains/Auth/hooks';

const Stack = createNativeStackNavigator();

const ProfileNavigator = () => {
  const { user } = useAuth();

  return (
    <Stack.Navigator
      initialRouteName={Route.PROFILE}
      screenOptions={{
        headerTintColor: Theme.colors.white,
        headerStyle: {
          backgroundColor: Theme.colors.primary,
        },
        title: 'Therapy',
        headerTitle: 'Therapy',
      }}>
      {user ? (
        <Stack.Screen
          name={Route.PROFILE}
          component={ProfileScreen}
          options={{ headerTitle: 'Therapy' }}
        />
      ) : (
        <>
          <Stack.Screen
            name={Route.SIGNIN}
            component={SigninScreen}
            options={{ headerTitle: 'Login' }}
          />
          <Stack.Screen
            name={Route.SIGNUP}
            component={SignupScreen}
            options={{ headerTitle: 'Sign Up' }}
          />
        </>
      )}
    </Stack.Navigator>
  );
};

export default ProfileNavigator;
