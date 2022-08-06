import styled from 'styled-components/native';
import {IAvatarContainerProps, IAvatarImageProps} from './types';

const sizes = {
  sm: 32,
  md: 40,
  lg: 48,
  xl: 87.5,
};

const AvatarImage = styled.Image<IAvatarImageProps>`
  ${props => {
    const sizeInPx = sizes[props.size];

    return `width: ${sizeInPx}px;
    height: ${sizeInPx}px;
    border-radius: ${sizeInPx / 2}px;`;
  }}
`;

const ContainerImage = styled.TouchableOpacity<IAvatarContainerProps>`
  width: ${props => sizes[props.size] + 4}px;
  height: ${props => sizes[props.size] + 4}px;
  border-radius: ${props => (sizes[props.size] + 4) / 2}px;
  justify-content: center;
  align-items: center;
  padding: 4px;
  background-color: ${props => props.theme.colors.primary};
`;

export {AvatarImage, ContainerImage};
