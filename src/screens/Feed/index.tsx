import {useFocusEffect, useNavigation} from '@react-navigation/native';
import React, {createRef, useCallback, useState} from 'react';
import Tweet from '../../components/Tweet';
import {FlatList, RefreshControl} from 'react-native';
import {tweet1, tweet2, tweet3} from '../../mocks/tweets';
import {useTheme} from 'styled-components';
import AnimatedHeader from '../../components/AnimatedHeader';
import {DrawerNavigationOptions} from '@react-navigation/drawer';

const Feed: React.FC = () => {
  const navigation = useNavigation();
  const theme = useTheme();
  const flatlistRef = createRef<FlatList>();

  const [isRefreshing, setRefreshing] = useState(false);

  useFocusEffect(
    useCallback(() => {
      const tabNav = navigation.getParent();
      const drawerNav = tabNav?.getParent();

      const options: DrawerNavigationOptions = {
        swipeEnabled: true,
        headerShown: true,
        header: () => <AnimatedHeader scrollRef={flatlistRef} />,
      };
      drawerNav?.setOptions(options);
      return () =>
        drawerNav?.setOptions({swipeEnabled: false, headerShown: false});
    }, [navigation, flatlistRef]),
  );

  const handleRefresh = () => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 1000);
  };

  return (
    <FlatList
      ref={flatlistRef}
      data={[
        tweet1,
        tweet2,
        tweet3,
        tweet1,
        tweet1,
        tweet1,
        tweet2,
        tweet1,
        tweet1,
        tweet1,
        tweet2,
        tweet1,
      ]}
      scrollEventThrottle={16}
      refreshControl={
        // TODO: customizar
        <RefreshControl refreshing={isRefreshing} onRefresh={handleRefresh} />
      }
      contentInsetAdjustmentBehavior="never"
      style={{
        backgroundColor: theme.colors.primary,
      }}
      renderItem={({item}) => <Tweet tweet={item} />}
    />
  );
};

export default Feed;
