import React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';

import {ContactStackNavigator} from './StackNavigator';
import TabNavigator from './TabNavigator';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="HomeTab" component={TabNavigator} />
      <Drawer.Screen name="ContactTab" component={ContactStackNavigator} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
