import React from 'react';
import { categories } from '../../utils/categories';

import {
    Container,
    Title,
    Amount,
    Footer,
    Icon,
    Category,
    Date,
    CategoryName


} from './styles';


export interface TransactionCardProps {
    type: 'positive' | 'negative';
    name: string;
    amount: string;
    category: string;
    date: string;
}

interface props {
    data: TransactionCardProps
}


export function TransactionCard({ data }: props) {
   
    const category = categories.filter(item => item.name === data.category)[0];
 
    return (
        <Container>
            <Title>{data.name}</Title>
            <Amount type={data.type}>
                {data.type === 'negative' && '- '}
                {data.amount}
            </Amount>
            <Footer>

                <Category>
                    <Icon name={category.icon} />
                    <CategoryName>{category.name}</CategoryName>
                </Category>
                <Date>{data.date}</Date>
            </Footer>


        </Container>

    )
}
