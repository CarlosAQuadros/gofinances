import React, { useCallback, useLayoutEffect, useEffect, useState } from 'react';
import { HistoryCard } from '../../components/HistoryCard';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  Container,
  Header,
  Title,
  Content
} from './styles';
import { useFocusEffect } from '@react-navigation/native';
import { categories } from '../../utils/categories';
import { FlatList } from 'react-native-gesture-handler';

export interface TransactionData {
  type: 'positive' | 'negative';
  name: string;
  amount: string;
  category: string;
  date: string;
}

interface categotyData {
  name: string,
  total: string,
  color: string
}

export function Resume() {

  const [totalByCategorios, setTotalByCategories] = useState<categotyData[]>([])


  async function loadData() {
    const dataKey = '@gofinances:transactions';
    const response = await AsyncStorage.getItem(dataKey);
    const responseFormatted = response ? JSON.parse(response) : [];

    const expensives = responseFormatted.filter((transaction: TransactionData) => transaction.type === 'negative')
    console.log('expensives >>', expensives)

    const totalByCategory: categotyData[] = []
    categories.forEach(category => {
      let categorySum = 0

      expensives.forEach((expensive: TransactionData) => {
        if (expensive.category === category.name) {
          categorySum += Number(expensive.amount)
        }

      });
      if (categorySum > 0) {
        const total = categorySum.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        })
        totalByCategory.push({
          name: category.name,
          total: total,
          color: category.color
        })

      }


    })

    setTotalByCategories(totalByCategory)


  }


  useEffect(() => {
    loadData()

  }, [])


  useFocusEffect(useCallback(
    () => {
      loadData()
    },
    [],
  ))
  return (
    <Container>
      <Header>
        <Title>Resumo</Title>
      </Header>
      <Content>
        {totalByCategorios.map(item => (

          <HistoryCard title={item.name} amount={item.total} color={item.color} />
        ))}

      </Content>


    </Container>
  );
}