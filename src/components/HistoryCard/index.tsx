import React from 'react';


import {
  Container,
  Title,
  Amount,
} from './styles';

interface props{
    title:string,
    amount:string,
    color:string
}


export function HistoryCard({title,amount,color}:props){
  return (
    <Container color={color}>
        <Title>{title}</Title>
        <Amount>{amount}</Amount>
    </Container>
  );
}