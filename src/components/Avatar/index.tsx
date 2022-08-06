import React from 'react';
import {IAvatarProps} from './types';
import * as Styles from './styles';

const Avatar: React.FC<IAvatarProps> = ({style: _, ...props}) => {
  return (
    <Styles.ContainerImage {...props}>
      <Styles.AvatarImage {...props} />
    </Styles.ContainerImage>
  );
};

export default Avatar;
