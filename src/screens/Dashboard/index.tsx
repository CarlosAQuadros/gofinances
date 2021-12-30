import React, { useCallback } from 'react';

import { useFocusEffect } from '@react-navigation/native';
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
import { number } from 'yup';


export interface DataListProps extends TransactionCardProps {
  id: string
}

interface highlightProps {
  total: string
}

interface highlightData {
  entries: highlightProps;
  expensive: highlightProps;
}


export function Dashboard() {

  const [data, setData] = useState<DataListProps[]>([]);
  const [highlightData, setHighlightData] = useState<highlightData>({} as highlightData)




  async function loadTransactions() {
    const dataKey = '@gofinances:transactions'
    const response = await AsyncStorage.getItem(dataKey);

    const transactions = response ? JSON.parse(response) : [];

    let entriesTotal=0;
    let expesiveTotal=0;

    const transactionsFormated: DataListProps[] = transactions.map((item: DataListProps) => {

      if(item.type ==='positive'){
        entriesTotal+=Number(item.amount)
      }else {
        expesiveTotal +=Number(item.amount)
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
    console.log(highlightData)
    
    setData(transactionsFormated)
    setHighlightData({
      entries:{
        total:entriesTotal.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})
      },
        expensive:{
          total:expesiveTotal.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})
        }
       
     })
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
          amount={'1234'}
          lastTransaction="Ultima entrada dia 13 de abril"
          type='up'
        />
        <HighlightCard
          title="Saidas"
          amount={'13245'}
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



