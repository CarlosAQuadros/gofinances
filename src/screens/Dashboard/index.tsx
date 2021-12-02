import React from 'react';
import { HighlightCard } from '../../components/HighlightCard';
import { TransactionCard, TransactionCardProps } from '../../components/TransactionCard';
import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {

  Container,
  Header,
  UserWrapper,
  UserInfo,
  UserImage,
  User,
  UserGreetingg,
  UserName,
  LogoutButton,
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

  const [data, setData] = useState<DataListProps[]>([]);

  async function loadTransaction() {
    const dataKey = '@gofinances:transactions';
    const response = await AsyncStorage.getItem(dataKey);
    const trasactions = response ? JSON.parse(response) : [];

    setData(trasactions)
  }

  useEffect(() => {
    loadTransaction()
  }, []);


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
          <LogoutButton onPress={() => { }}>
            <Icon name="power" />
          </LogoutButton>

        </UserWrapper>
      </Header>
      <HighlightCards>
        <HighlightCard
          title="Entradas"
          amount="R$ 35.400,00"
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
          amount="R$ 12.400,00"
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



