import React, { useCallback } from 'react';
import { useState, useEffect } from 'react';
import { ActivityIndicator } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';


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
  LogoutButton,
  Icon,
  HighlightCards,
  Transactions,
  Title,
  TransactionList,
  LoadContainer
} from './styles';
import { number } from 'yup';


export interface DataListProps extends TransactionCardProps {
  id: string
}

interface highlightProps {
  amount: string
}

interface highlightData {
  entries: highlightProps;
  expensive: highlightProps;
  total: highlightProps
}


export function Dashboard() {

  const [isLoading, setIsLoading] = useState(true)
  const [transactions, setTransactions] = useState<DataListProps[]>([]);
  const [highlightData, setHighlightData] = useState<highlightData>({} as highlightData)




  async function loadTransactions() {
    const dataKey = '@gofinances:transactions'
    const response = await AsyncStorage.getItem(dataKey);

    const transactions = response ? JSON.parse(response) : [];
    console.log('log====  ', transactions)

    let entriesTotal = 0;
    let expesiveTotal = 0;

    const transactionsFormated: DataListProps[] = transactions.map((item: DataListProps) => {

      if (item.type === 'positive') {
        entriesTotal += Number(item.amount)
      } else {
        expesiveTotal += Number(item.amount)
      }

      const date = Intl.DateTimeFormat('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
      }).format(new Date("2022-01-04:17:31:440000"))

      let amount = Number(item.amount).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
      amount = amount.replace('R$', 'R$ ');

      return {
        id: item.id,
        name: item.name,
        amount,
        type: item.type,
        category: item.category,
        date
      }
    })


    setTransactions(transactionsFormated)

    const total = entriesTotal - expesiveTotal

    setHighlightData({
      entries: {
        amount: entriesTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
      },
      expensive: {
        amount: expesiveTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
      },
      total: {
        amount: total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
      }

    })
    setTimeout(()=>setIsLoading(false), 1500)
    
  }




  useEffect(() => {
    loadTransactions()
  }, [])

  useFocusEffect(useCallback(
    () => {
      loadTransactions()
    },
    [],
  ))


  return (
    <Container>
      {isLoading ?
        <LoadContainer>
          <ActivityIndicator color={'green'}/>
        </LoadContainer> :
        <>
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
              amount={highlightData.entries.amount}
              lastTransaction="Ultima entrada dia 13 de abril"
              type='up'
            />
            <HighlightCard
              title="Saidas"
              amount={highlightData.expensive.amount}
              lastTransaction="Ultima entrada dia 13 de abril"
              type='down'
            />
            <HighlightCard
              title="Saldo"
              amount={highlightData.total.amount}
              lastTransaction="Ultima entrada dia 13 de abril"
              type='total'
            />
          </HighlightCards>
          <Transactions>
            <Title>Listagem</Title>

            <TransactionList
              data={transactions}
              keyExtractor={item => item.id}
              renderItem={({ item }) => <TransactionCard data={item} />}
            />
          </Transactions>
        </>
      }
    </Container >
  )
}



