import React from 'react';
import {SafeAreaView} from 'react-native';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import {useTheme} from 'styled-components';
import DrawerProfile from './components/DrawerProfile';
import Icon from '../Icon';
import {userRaul} from '../../mocks/users';

const CustomDrawer = (props: DrawerContentComponentProps) => {
  const theme = useTheme();
  return (
    <SafeAreaView style={{backgroundColor: theme.colors.primary, flexGrow: 1}}>
      <DrawerProfile
        user={{
          ...userRaul,
          following: new Array(70),
          followers: new Array(12),
          nav: props.navigation,
        }}
      />
      <DrawerContentScrollView
        contentContainerStyle={{
          flexGrow: 1,
          paddingTop: 0,
          paddingBottom: 0,
        }}
        scrollEnabled
        {...props}>
        {/* <DrawerItemList {...props} /> */}

        <DrawerItem
          label={'Perfil'}
          icon={({...iconProps}) => (
            <Icon {...iconProps} name={'person-outline'} />
          )}
          inactiveTintColor={theme.colors.secondary[1]}
          activeTintColor={theme.colors.secondary[1]}
          labelStyle={{
            color: theme.colors.secondary[1],
            marginLeft: -16,
          }}
          onPress={() => props.navigation.navigate('Profile')}
        />
      </DrawerContentScrollView>
    </SafeAreaView>
  );
};

export default CustomDrawer;
