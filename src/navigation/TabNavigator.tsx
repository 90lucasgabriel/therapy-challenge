import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';

import { Theme } from 'shared/styles';
import HomeNavigator from 'navigation/HomeNavigator';
import Route from './enums';

const Tab = createBottomTabNavigator();

const TabNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: Theme.colors.secondary,
        tabBarInactiveTintColor: Theme.colors.background,
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: Theme.colors.primary,
        },
      }}>
      <Tab.Screen
        name={Route.HOME_TAB}
        component={HomeNavigator}
        options={{
          title: 'Início',
          tabBarIcon: ({ size, color }) => (
            <Feather name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={Route.SEARCH_TAB}
        component={HomeNavigator}
        options={{
          title: 'Início',
          tabBarIcon: ({ size, color }) => (
            <Feather name="search" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={Route.PROFILE_TAB}
        component={HomeNavigator}
        options={{
          title: 'Perfil',
          tabBarIcon: ({ size, color }) => (
            <Feather name="user" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
