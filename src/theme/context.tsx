import React, {PropsWithChildren} from 'react';

import darkTheme from './dark.theme';
import lightTheme from './light.theme';
import {useColorScheme} from 'react-native';
import {ThemeProvider} from 'styled-components';

const CustomThemeProvider: React.FC<PropsWithChildren> = ({children}) => {
  const isDark = useColorScheme() === 'dark';
  // TODO: verificar opção do cache

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      {children}
    </ThemeProvider>
  );
};

export default CustomThemeProvider;
