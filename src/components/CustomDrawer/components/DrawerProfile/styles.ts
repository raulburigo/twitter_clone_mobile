import styled from 'styled-components/native';

const MainContainer = styled.View`
  padding: 16px;
`;

const NameContainer = styled.View`
  margin-top: 8px;
`;

const ConnectionsRow = styled.View`
  flex-direction: row;
  margin-top: 12px;
`;

const FollowingContainer = styled.Text`
  flex-direction: row;
  margin-right: 20px;
`;

const FollowersContainer = styled.Text`
  flex-direction: row;
`;

const ConnectionCounterText = styled.Text`
  color: ${props => props.theme.colors.secondary[1]};
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
`;

const ConnectionLabelText = styled.Text`
  color: ${props => props.theme.colors.secondary[3]};
  padding-left: 4px;
`;

const NameText = styled.Text`
  color: ${props => props.theme.colors.secondary[1]};
  font-weight: 700;
  font-size: 17px;
  line-height: 20px;
`;

const UsernameText = styled.Text`
  color: ${props => props.theme.colors.secondary[3]};
  font-weight: 400;
  font-size: 15px;
  line-height: 20px;
`;

export {
  MainContainer,
  NameText,
  UsernameText,
  NameContainer,
  FollowersContainer,
  FollowingContainer,
  ConnectionsRow,
  ConnectionCounterText,
  ConnectionLabelText,
};
