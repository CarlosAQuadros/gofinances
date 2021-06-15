import React, { useState } from 'react';
import { Modal } from 'react-native';

import { Input } from '../../components/Form/Input/';
import { Button } from '../../components/Form/Button/'
import { TransactionTypeButton } from '../../components/Form/TransactionTypeButton';
import { CategorySelectButton } from '../../components/Form/CategorySelectButton';
import { CategorySelect } from '../CategorySelect';


import {
    Container,
    Header,
    Title,
    Form,
    Fields,
    TransactionTypes
} from './styles'


export function Register() {
    const [category, setCategory] = useState({
        key: 'category',
        name: 'categoria',

    })

    const [transactionType, setTransactiontype] = useState('');
    const [categoryModalOpen, setCategoryModalOpen] = useState(false)


    function handleTransactionTypeSelect(type: 'up' | 'down') {
        setTransactiontype(type)
    };

    function handleOpenSelectCategoryModal() {
        setCategoryModalOpen(true)
    }

    function handleCloseSelectCategoryModal() {
        setCategoryModalOpen(false)
    }


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
                            onPress={() => handleTransactionTypeSelect('up')}
                            isActive={transactionType === 'up'}
                        />
                        <TransactionTypeButton
                            title='Outcome'
                            type='down'
                            onPress={() => handleTransactionTypeSelect('down')}
                            isActive={transactionType === 'down'}
                        />
                    </TransactionTypes>
                    <CategorySelectButton
                        onPress={handleOpenSelectCategoryModal}
                        title='Categoria'
                    ></CategorySelectButton>

                </Fields>

                <Button
                    title="Enviar" />
            </Form>
            <Modal
                visible={categoryModalOpen}
                statusBarTranslucent={true}
            >
                <CategorySelect
                    category={category}
                    setCategory={setCategory}
                    closeSelectCategory={handleCloseSelectCategoryModal}
                ></CategorySelect>
            </Modal>


        </Container>
    );
}