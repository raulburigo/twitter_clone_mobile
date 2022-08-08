import React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';
import {AuthStack, ContactStackNavigator} from './StackNavigator';
import TabNavigator from './TabNavigator';
import CustomDrawer from '../components/CustomDrawer';
import {useTheme} from 'styled-components';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  const theme = useTheme();
  const isLoggedIn = false;

  return (
    <Drawer.Navigator
      initialRouteName={isLoggedIn ? 'HomeTab' : 'AuthNavigator'}
      screenOptions={{
        headerStyle: {backgroundColor: theme.colors.primary},
        headerTintColor: theme.colors.secondary[1],
        drawerActiveBackgroundColor: 'transparent',
        swipeEdgeWidth: 1000,
        drawerType: 'slide',
        headerShown: false,
        swipeEnabled: false,
      }}
      drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen name="HomeTab" component={TabNavigator} />
      <Drawer.Screen name="AuthNavigator" component={AuthStack} />
      <Drawer.Screen name="ContactTab" component={ContactStackNavigator} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
