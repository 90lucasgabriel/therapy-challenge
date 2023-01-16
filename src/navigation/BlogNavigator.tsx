import React, { ReactElement } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Theme } from 'shared/styles';
import { BlogScreen } from 'screens';

import Route from 'navigation/enums';

const Stack = createNativeStackNavigator();

const BlogNavigator = (): ReactElement => {
  return (
    <Stack.Navigator
      initialRouteName={Route.BLOG}
      screenOptions={{
        headerTintColor: Theme.colors.white,
        headerStyle: {
          backgroundColor: Theme.colors.primary,
        },
        title: 'Therapy',
        headerTitle: 'Therapy',
      }}>
      <Stack.Screen name={Route.BLOG} component={BlogScreen} />
    </Stack.Navigator>
  );
};

export default BlogNavigator;
