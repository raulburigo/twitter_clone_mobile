import React, {PropsWithChildren} from 'react'
import { View } from 'react-native'
import { DripsyProvider } from 'dripsy'
import { theme } from 'app/theme'
import CustomThemeProvider from '../src/theme/context'
import { useTheme } from 'styled-components'

export const decorators = [
  (Story) => (
    <CustomThemeProvider>
      <MainAxisCenter>
        <Story />
      </MainAxisCenter>
    </CustomThemeProvider>
  )
]

const MainAxisCenter = ({ children }) => {
  const theme = useTheme()

  return <View style={{
    flex: 1,
    justifyContent: 'center',
    backgroundColor: theme.colors.primary
  }}>{children}</View>
}

export const parameters = {}