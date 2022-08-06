import React from 'react';
import {IDrawerProfileProps} from './types';

import Avatar from '../../../Avatar';

import * as S from './styles';

const DrawerProfile: React.FC<IDrawerProfileProps> = ({user}) => {
  // cor da bordinha #38444d

  const goToProfile = () => user.nav.navigate('Profile');
  const goToConnections = () => user.nav.navigate('Connections');

  return (
    <S.MainContainer>
      <Avatar
        size="lg"
        source={{
          uri: user.avatar,
        }}
        onPress={goToProfile}
      />
      <S.NameContainer>
        <S.NameText onPress={goToProfile}>{user.name}</S.NameText>
        <S.UsernameText
          onPress={goToProfile}>{`@${user.username}`}</S.UsernameText>
      </S.NameContainer>
      <S.ConnectionsRow>
        <S.FollowingContainer onPress={goToConnections}>
          <S.ConnectionCounterText>
            {user.following.length}
          </S.ConnectionCounterText>
          <S.ConnectionLabelText> Seguindo</S.ConnectionLabelText>
        </S.FollowingContainer>
        <S.FollowersContainer onPress={goToConnections}>
          <S.ConnectionCounterText>
            {user.followers.length}
          </S.ConnectionCounterText>
          <S.ConnectionLabelText> Seguidores</S.ConnectionLabelText>
        </S.FollowersContainer>
      </S.ConnectionsRow>
    </S.MainContainer>
  );
};

export default DrawerProfile;
