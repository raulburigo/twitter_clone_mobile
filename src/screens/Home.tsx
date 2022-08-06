import {useFocusEffect, useNavigation} from '@react-navigation/native';
import React, {useCallback} from 'react';
import {View, Button, Text, StyleSheet} from 'react-native';
import Tweet from '../components/Tweet';

const Home: React.FC = () => {
  const navigation = useNavigation();

  useFocusEffect(
    useCallback(() => {
      const tabNav = navigation.getParent();
      const drawerNav = tabNav?.getParent();
      drawerNav?.setOptions({swipeEnabled: true});
      return () => drawerNav?.setOptions({swipeEnabled: false});
    }, [navigation]),
  );

  return (
    <View style={styles.center}>
      <Tweet />
      <Tweet />
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
});

export default Home;
