import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import DrawerNavigator from './src/navigation/DrawerNavigator';
import CustomThemeProvider from './src/theme/context';

const App = () => {
  return (
    <NavigationContainer>
      <CustomThemeProvider>
        <DrawerNavigator />
      </CustomThemeProvider>
    </NavigationContainer>
  );
};
export default App;
