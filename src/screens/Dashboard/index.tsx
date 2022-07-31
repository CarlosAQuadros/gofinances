import React, { useCallback } from 'react';
import { useState, useEffect } from 'react';
import { ActivityIndicator } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { useTheme } from 'styled-components';

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
  amount: string;
  lastTransaction:string
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

  const theme = useTheme()


  function getLastTransactionDate(collection: DataListProps[], type: 'positive' | 'negative') {

    const lastTransaction = new Date(Math.max.apply(Math,
      collection
        .filter(transaction => transaction.type === type)
        .map(transaction => new Date(transaction.date).getTime()
        )
    ))

    const lastTransactionFormatted = Intl.DateTimeFormat('pt-Br', {
      day: '2-digit',
      month: 'long',
      
    }).format(new Date(lastTransaction))

    return lastTransactionFormatted
  }



  async function loadTransactions() {
    const dataKey = '@gofinances:transactions'
    const response = await AsyncStorage.getItem(dataKey);

    const transactions = response ? JSON.parse(response) : [];
    console.log('log====  ', transactions)

    let entriesTotal = 0;
    let expesiveTotal = 0;

    const transactionsFormated: DataListProps[] = transactions.map((item: DataListProps) => {
      console.log(item)
      if (item.type === 'positive') {
        entriesTotal += Number(item.amount)
      } else {
        expesiveTotal += Number(item.amount)
      }

      const date = Intl.DateTimeFormat('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
      }).format(new Date(item.date))

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

    const lastTransactionEntries = getLastTransactionDate(transactions, 'positive' )
    const lastTransactionExpensives = getLastTransactionDate(transactions, 'negative' )

    const total = entriesTotal - expesiveTotal

    setHighlightData({
      entries: {
        amount: entriesTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }),
        lastTransaction:`Última entrada dia ${lastTransactionEntries}`
      },
      expensive: {
        amount: expesiveTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }),
        lastTransaction:`Última saída dia ${lastTransactionExpensives}`
      },
      total: {
        amount: total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }),
        lastTransaction:`De 01 a ${lastTransactionExpensives}`
      }

    })
    setTimeout(() => setIsLoading(false), 1500)

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
          <ActivityIndicator
            color={theme.colors.primary}
            size={'large'}
          />
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
              lastTransaction={highlightData.entries.lastTransaction}
              type='up'
            />
            <HighlightCard
              title="Saidas"
              amount={highlightData.expensive.amount}
              lastTransaction={highlightData.expensive.lastTransaction}
              type='down'
            />
            <HighlightCard
              title="Saldo"
              amount={highlightData.total.amount}
              lastTransaction={highlightData.total.lastTransaction}
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



