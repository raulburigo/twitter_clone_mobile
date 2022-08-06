import React from 'react';
import {tweet1} from '../../mocks/tweets';
import Tweet from './index';

export default {
  title: 'Tweet',
  component: Tweet,
  args: {},
};

export const Basic: React.FC = () => <Tweet tweet={tweet1} />;
