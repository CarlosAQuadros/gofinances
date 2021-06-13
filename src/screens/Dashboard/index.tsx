import React from 'react';
import { HighlightCard } from '../../components/HighlightCard';
import { TransactionCard, TransactionCardProps } from '../../components/TransactionCard';

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
  HighlightCards,
  Transactions,
  Title,
  TransactionList
} from './styles';


export interface DataListProps extends TransactionCardProps {
  id: string
}

export function Dashboard() {


  const data :DataListProps []= [{
    id: '1',
    type: "positive",
    title: "desenvolvimento de site",
    amount: "R$ 1500000",
    category: {
      name: 'vendas',
      icon: 'dollar-sign'
    },
    date: "14/15/1222"
  },
  {
    id: '2',
    type: "negative",
    title: "hamburgueria pizssszy",
    amount: "R$ 59,00",
    category: {
      name: 'alimentação',
      icon: 'coffee'
    },
    date: "14/15/1222"
  },
  {
    id: '3',
    type: "negative",
    title: "aluguel do apartamento",
    amount: "R$ 1.200",
    category: {
      name: 'casa',
      icon: 'shopping-bag'
    },
    date: "14/15/1222"
  }]
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
          <Icon name="power" />
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
      <Transactions>
        <Title>Listagem</Title>

        <TransactionList
          data={data}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <TransactionCard data={item} />}
        />
      </Transactions>
    </Container >
  )
}



