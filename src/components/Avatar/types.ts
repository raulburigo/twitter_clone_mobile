import {ImageProps, TouchableOpacityProps} from 'react-native';

type AvatarSize = 'sm' | 'md' | 'lg' | 'xl';

interface IAvatarProps
  extends Omit<ImageProps, 'style'>,
    TouchableOpacityProps {
  size: AvatarSize;
}

interface IAvatarImageProps extends IAvatarProps {}

interface IAvatarContainerProps extends Omit<IAvatarProps, 'source'> {}

export type {IAvatarProps, IAvatarImageProps, IAvatarContainerProps};
