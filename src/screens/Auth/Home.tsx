import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useTheme} from 'styled-components';
import Icon from '../../components/Icon';

const Home: React.FC = () => {
  const navigation = useNavigation();
  const theme = useTheme();

  return (
    <SafeAreaView
      style={{
        backgroundColor: theme.colors.primary,
        flex: 1,
        alignItems: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
      }}>
      <Icon name={'bird'} size={30} color={theme.colors.accent} />
      <View
        style={{
          flexGrow: 1,
          width: '100%',
          justifyContent: 'center',
          alignItems: 'flex-start',
        }}>
        <View
          style={{
            width: '60%',
          }}>
          <Text
            style={{
              fontSize: 23,
              lineHeight: 28,
              fontWeight: '700',
              color: theme.colors.secondary[1],
            }}>
            Veja o que está acontecendo no mundo neste momento.
          </Text>
        </View>
      </View>
      <View style={{width: '100%'}}>
        <View>
          <View
            style={{
              backgroundColor: theme.colors.secondary[1],
              borderRadius: 100,
              alignItems: 'center',
              paddingVertical: 14,
              marginBottom: 12,
            }}>
            <Text
              style={{
                color: 'black',
                fontSize: 18,
                fontWeight: '700',
                lineHeight: 24,
              }}>
              Continuar com Google
            </Text>
          </View>
          <View
            style={{
              backgroundColor: theme.colors.secondary[1],
              borderRadius: 100,
              alignItems: 'center',
              paddingVertical: 14,
              marginBottom: 18,
            }}>
            <Text
              style={{
                color: 'black',
                fontSize: 18,
                fontWeight: '700',
                lineHeight: 24,
              }}>
              Continuar com Apple
            </Text>
          </View>
        </View>
        <View
          style={{flexDirection: 'row', alignItems: 'center', marginBottom: 8}}>
          <View
            style={{
              height: 1,
              backgroundColor: theme.colors.secondary[3],
              flexGrow: 1,
            }}
          />
          <Text style={{color: theme.colors.secondary[3], marginHorizontal: 8}}>
            ou
          </Text>
          <View
            style={{
              height: 1,
              backgroundColor: theme.colors.secondary[3],
              flexGrow: 1,
            }}
          />
        </View>
        <View
          style={{
            backgroundColor: theme.colors.secondary[1],
            borderRadius: 100,
            alignItems: 'center',
            paddingVertical: 14,
            marginBottom: 24,
          }}>
          <Text
            style={{
              color: 'black',
              fontSize: 18,
              fontWeight: '700',
              lineHeight: 24,
            }}>
            Criar conta
          </Text>
        </View>
      </View>
      <View style={{alignItems: 'flex-start', width: '100%'}}>
        <Text style={{color: theme.colors.secondary[3], marginBottom: 32}}>
          {'Ao se increver, você concorda com nossos '}
          <Text style={{color: theme.colors.accent}}>Termos</Text>
          {', a '}
          <Text style={{color: theme.colors.accent}}>
            Política de Privacidade
          </Text>
          {' e o '}
          <Text style={{color: theme.colors.accent}}>Uso de Cookies</Text>.
        </Text>
        <Text style={{color: theme.colors.secondary[3]}}>
          {'Já tem uma conta? '}
          <Text
            style={{color: theme.colors.accent}}
            onPress={() => navigation.navigate('Username')}>
            Entrar
          </Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Home;
