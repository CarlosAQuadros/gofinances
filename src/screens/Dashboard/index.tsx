import React from 'react';
import { HighlightCard } from '../../components/HighlightCard';

import {
  Container,
  Header,
  UserWrapper,
  UserInfo,
  UserImage,
  User,
  UserGreetingg,
  UserName,
  Icon,
  HighlightCards
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
      <HighlightCards>
        <HighlightCard
          title="Entradas"
          amount="R$ 17.400,00"
          lastTransaction="Ultima entrada dia 13 de abril"
          type='up'
        />
        <HighlightCard
          title="Saidas"
          amount="R$ 17.400,00"
          lastTransaction="Ultima entrada dia 13 de abril" 
          type='down'
          />
        <HighlightCard
          title="Saldo"
          amount="R$ 17.400,00"
          lastTransaction="Ultima entrada dia 13 de abril"
          type='total'
          />
      </HighlightCards>

    </Container>
  )
}



