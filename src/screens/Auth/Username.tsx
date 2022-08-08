import {useFocusEffect, useNavigation} from '@react-navigation/native';
import React, {useCallback, useState} from 'react';
import {View, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useTheme} from 'styled-components';
import Icon from '../../components/Icon';

const Username: React.FC = () => {
  const navigation = useNavigation();
  const theme = useTheme();
  const [width, setWidth] = useState(0);

  return (
    <SafeAreaView
      style={{
        backgroundColor: theme.colors.primary,
        flex: 1,
        alignItems: 'center',
        paddingVertical: 12,
        paddingHorizontal: 16,
      }}>
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Text
          style={{color: theme.colors.secondary[1], flexGrow: 1}}
          onTextLayout={e => setWidth(e.nativeEvent.lines[0].width)}
          onPress={() => navigation.goBack()}>
          Cancelar
        </Text>
        <Icon name={'bird'} size={30} color={theme.colors.accent} />
        <View style={{flexGrow: 1, width: width}} />
      </View>
      <View
        style={{
          paddingHorizontal: 16,
          width: '100%',
          alignItems: 'center',
          paddingTop: 32,
        }}>
        <View style={{width: '100%', justifyContent: 'flex-start'}}>
          <Text
            style={{
              fontSize: 23,
              lineHeight: 28,
              fontWeight: '700',
              color: theme.colors.secondary[1],
            }}>
            Para começar, informe telefone, e-mail ou @nomedeusuario
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Username;
