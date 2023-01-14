import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';

import Route from './enums';
import { Theme } from 'shared/styles';
import { HomeNavigator, BlogNavigator, ProfileNavigator } from 'navigation';

const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarHideOnKeyboard: true,
          tabBarActiveTintColor: Theme.colors.secondary,
          tabBarInactiveTintColor: Theme.colors.background,
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: Theme.colors.primary,
          },
          headerTintColor: Theme.colors.white,
          headerStyle: {
            backgroundColor: Theme.colors.primary,
          },
          title: 'Vittude',
          headerTitle: 'Vittude',
        }}>
        <Tab.Screen
          name={Route.HOME_TAB}
          component={HomeNavigator}
          options={{
            title: 'Home',
            tabBarIcon: ({ size, color }) => (
              <Feather name="home" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name={Route.BLOG_TAB}
          component={BlogNavigator}
          options={{
            title: 'Blog',
            tabBarIcon: ({ size, color }) => (
              <Feather name="file-text" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name={Route.PROFILE_TAB}
          component={ProfileNavigator}
          options={{
            title: 'Profile',
            tabBarIcon: ({ size, color }) => (
              <Feather name="user" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
