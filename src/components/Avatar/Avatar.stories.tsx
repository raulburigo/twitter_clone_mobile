import React from 'react';
import Avatar from './index';
import {IAvatarProps} from './types';

export default {
  title: 'Avatar',
  component: Avatar,
  args: {
    size: 'lg',
    source: {
      uri: 'https://media-exp1.licdn.com/dms/image/C4D03AQH6ftjU2IS-iA/profile-displayphoto-shrink_200_200/0/1599567237436?e=1659571200&v=beta&t=yh120H349x0UCxr1GY5N9j07hNvlmBsm3xmA7xI6C38',
    },
  },
};

export const Basic: React.FC<IAvatarProps> = ({size, source}) => (
  <Avatar size={size} source={source} />
);
