import React from 'react';
import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';

import About from '../screens/About';
import Contact from '../screens/Contact';
import Profile from '../screens/Profile';
import Connections from '../screens/Connections';
import Feed from '../screens/Feed';
import {DefaultTheme, useTheme} from 'styled-components';

const Stack = createStackNavigator();

const screenOptionStyle = (theme: DefaultTheme): StackNavigationOptions => ({
  headerStyle: {
    backgroundColor: theme.colors.primary,
  },
  headerTintColor: theme.colors.secondary[1],
  headerShown: false,
});

const MainStackNavigator = () => {
  const theme = useTheme();

  return (
    <Stack.Navigator screenOptions={screenOptionStyle(theme)}>
      <Stack.Screen name="Tweet" component={Feed} />
      <Stack.Screen name="About" component={About} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Connections" component={Connections} />
    </Stack.Navigator>
  );
};

const ContactStackNavigator = () => {
  const theme = useTheme();

  return (
    <Stack.Navigator screenOptions={screenOptionStyle(theme)}>
      <Stack.Screen name="Main" component={Contact} />
    </Stack.Navigator>
  );
};

export {MainStackNavigator, ContactStackNavigator};
