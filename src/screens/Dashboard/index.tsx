import React from 'react';

import {
  Container,
  Header,
  UserWrapper,
  UserInfo,
  UserImage,
  User,
  UserGreetingg,
  UserName,
  Icon
} from './styles';
export function Dashboard() {
  return (
    <Container >
      <Header>
        <UserWrapper>
          <UserInfo>
            <UserImage
              source={{ uri: 'https://avatars.githubusercontent.com/u/50021330?v=4' }} >
            </UserImage>
            <User>
              <UserGreetingg>Olá,</UserGreetingg>
              <UserName>Carlos</UserName>
            </User>
          </UserInfo>
          <Icon name="power-off" />
        </UserWrapper>
      </Header>
    </Container>
  )
}



