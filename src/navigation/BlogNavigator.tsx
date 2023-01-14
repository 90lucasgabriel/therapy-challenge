import React, { ReactElement } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { BlogScreen } from 'screens';

import Route from 'navigation/enums';

const Stack = createNativeStackNavigator();

const BlogNavigator = (): ReactElement => {
  return (
    <Stack.Navigator
      initialRouteName={Route.BLOG}
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name={Route.BLOG} component={BlogScreen} />
    </Stack.Navigator>
  );
};

export default BlogNavigator;
