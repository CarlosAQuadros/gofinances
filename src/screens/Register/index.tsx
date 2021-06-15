import React,{useState} from 'react';

import { Input } from '../../components/Form/Input/';
import { Button } from '../../components/Form/Button/'
import { TransactionTypeButton } from '../../components/Form/TransactionTypeButton';
import { CategorySelect } from '../../components/Form/CategorySelect';

import {
    Container,
    Header,
    Title,
    Form,
    Fields,
    TransactionTypes
} from './styles'

export function Register() {
    const [transactionType, setTransactiontype]=useState('');


    function handleTransactionTypeSelect(type:'up'|'down'){
        setTransactiontype(type)
    };

    return (
        <Container>
            <Header>
                <Title>Cadastro</Title>

            </Header>
            <Form>
                <Fields>
                    <Input
                        placeholder='Nome'
                    ></Input>
                    <Input
                        placeholder='Preço'
                    ></Input>
                    <TransactionTypes>
                    <TransactionTypeButton 
                        title='Income'
                        type='up'
                        onPress={()=>handleTransactionTypeSelect('up')}
                        isActive={transactionType === 'up'}
                    />
                      <TransactionTypeButton 
                        title='Outcome'
                        type='down'
                        onPress={()=>handleTransactionTypeSelect('down')}
                        isActive={transactionType === 'down'}
                    />
                    </TransactionTypes>
                    <CategorySelect
                    title='Categoria'
                    ></CategorySelect>

                </Fields>

                <Button
                    title="Enviar" />
            </Form>


        </Container>
    );
}