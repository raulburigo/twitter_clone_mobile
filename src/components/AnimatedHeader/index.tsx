import {DrawerActions, useNavigation} from '@react-navigation/native';
import * as React from 'react';
import {SafeAreaView, TouchableOpacity, View} from 'react-native';
import {useTheme} from 'styled-components';
import {userRaul} from '../../mocks/users';
import Avatar from '../Avatar';
import Icon from '../Icon';
import {IAnimatedHeaderProps} from './types';

const AnimatedHeader: React.FC<IAnimatedHeaderProps> = ({scrollRef}) => {
  const theme = useTheme();
  const navigation = useNavigation();

  // TODO: animar
  return (
    <SafeAreaView
      style={{
        backgroundColor: theme.colors.primary,
        width: '100%',
      }}>
      <View
        style={{
          width: '100%',
          justifyContent: 'center',
        }}>
        <View
          style={{
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'row',
            paddingHorizontal: 12,
            paddingVertical: 4,
          }}>
          <Avatar
            size={'sm'}
            source={{
              uri: userRaul.avatar,
            }}
            onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
          />
          <TouchableOpacity
            onPress={() => scrollRef.current?.scrollToOffset({offset: 0})}>
            <Icon name={'bird'} size={30} color={theme.colors.accent} />
          </TouchableOpacity>
          <View style={{width: 30}} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AnimatedHeader;
