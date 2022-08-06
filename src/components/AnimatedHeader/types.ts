import {RefObject} from 'react';
import {FlatList} from 'react-native';

interface IAnimatedHeaderProps {
  scrollRef: RefObject<FlatList<any>>;
}

export type {IAnimatedHeaderProps};
