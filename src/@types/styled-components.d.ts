import 'styled-components';
import lightTheme from '../theme/light.theme';

type Theme = typeof lightTheme;

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
