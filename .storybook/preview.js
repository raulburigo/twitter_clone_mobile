import React, {PropsWithChildren} from 'react'
import { SafeAreaView, View } from 'react-native'
import { DripsyProvider } from 'dripsy'
import { theme } from 'app/theme'
import CustomThemeProvider from '../src/theme/context'
import { useTheme } from 'styled-components'
import { ScrollView } from 'react-native-gesture-handler'

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

  return <View style={{flex: 1, backgroundColor: theme.colors.primary, justifyContent: 'center', alignItems: 'center'}}>
    {/* <ScrollView  scrollEnabled contentContainerStyle={{flexGrow: 1}}>
      <View style={{flex: 1}}> */}
        {children}
        {/* </View>
    </ScrollView> */}
  </View>
}

export const parameters = {}