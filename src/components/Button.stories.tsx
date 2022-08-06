import React from 'react';
import {Button, ButtonProps} from 'react-native';

export default {
  title: 'React Native Button',
  component: Button,
  args: {
    title: 'Hello world',
  },
};

export const Basic: React.FC<ButtonProps> = (args: ButtonProps) => (
  <Button {...args} />
);
