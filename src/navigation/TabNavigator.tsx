import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {MainStackNavigator, ContactStackNavigator} from './StackNavigator';
import Icon from '../components/Icon';
import {useTheme} from 'styled-components';

const Tab = createBottomTabNavigator();

type TabOption = 'Home' | 'Search' | 'Notifications' | 'Messages';

const BottomTabNavigator = () => {
  const iconMap: {[key in TabOption]: string[]} = {
    Home: ['home', 'home-outline'],
    Messages: ['mail', 'mail-outline'],
    Notifications: ['bell', 'bell-outline'],
    Search: ['search-bold', 'search'],
  };

  const theme = useTheme();

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: theme.colors.primary,
        },
        headerShown: false,
        tabBarInactiveTintColor: theme.colors.secondary[1],
        tabBarActiveTintColor: theme.colors.secondary[1],
        tabBarIcon: ({focused, color, size}) => {
          const icon = iconMap[route.name as TabOption][focused ? 0 : 1];
          return <Icon name={icon} size={size} color={color} />;
        },
      })}>
      <Tab.Screen name="Home" component={MainStackNavigator} />
      <Tab.Screen name="Search" component={ContactStackNavigator} />
      <Tab.Screen name="Notifications" component={ContactStackNavigator} />
      <Tab.Screen name="Messages" component={ContactStackNavigator} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
