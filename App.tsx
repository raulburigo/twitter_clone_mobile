import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import DrawerNavigator from './src/navigation/DrawerNavigator';
import CustomThemeProvider from './src/theme/context';
import Config from 'react-native-config';

import Storybook from './.storybook/Storybook';

const App = () => {
  return (
    <NavigationContainer>
      <CustomThemeProvider>
        <DrawerNavigator />
      </CustomThemeProvider>
    </NavigationContainer>
  );
};

export default /* Config.LOAD_STORYBOOK === 'true' ? Storybook : */ App;
