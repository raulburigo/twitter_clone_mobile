import React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';
import {iconPaths} from './iconPaths';
import {IIconProps} from './types';

const Icon: React.FC<IIconProps> = ({color, size, name}) => {
  const paths: string[] = iconPaths[name] ?? [
    'M12 19c.828 0 1.5.672 1.5 1.5S12.828 22 12 22s-1.5-.672-1.5-1.5.672-1.5 1.5-1.5zm0-17c3.314 0 6 2.686 6 6 0 2.165-.753 3.29-2.674 4.923C13.399 14.56 13 15.297 13 17h-2c0-2.474.787-3.695 3.031-5.601C15.548 10.11 16 9.434 16 8c0-2.21-1.79-4-4-4S8 5.79 8 8v1H6V8c0-3.314 2.686-6 6-6z',
  ];

  return (
    <Svg viewBox="0 0 24 24" height={size} width={size}>
      {paths.map((path, index) => (
        <Path key={index} d={path} fill={color} />
      ))}
      {name === 'dots' && (
        <>
          <Circle cx={5} cy={12} r={2} fill={color} />
          <Circle cx={12} cy={12} r={2} fill={color} />
          <Circle cx={19} cy={12} r={2} fill={color} />
        </>
      )}
    </Svg>
  );
};

export default Icon;
