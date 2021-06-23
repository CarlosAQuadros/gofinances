import React, { useState } from 'react';
import { Modal } from 'react-native';

import { useForm } from 'react-hook-form'
import { InputForm } from '../../components/Form/inputForm';
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

interface formData {
    name: string;
    amount: string;
}

export function Register() {
    const [category, setCategory] = useState({
        key: 'category',
        name: 'categoria',

    })

    const [transactionType, setTransactiontype] = useState('');
    const [categoryModalOpen, setCategoryModalOpen] = useState(false)


    const {
        control,
        handleSubmit

    } = useForm();


    function handleRegister(form: formData) {
        const data = {
            name: form.name,
            amount: form.amount,
            transactionType,
            category: category.name
        }

        console.log(data)
    }


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
                    <InputForm
                        name="name"
                        control={control}
                        placeholder='Nome'

                    ></InputForm>
                    <InputForm
                        name="amount"
                        control={control}
                        placeholder='Preço'

                    ></InputForm>
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
                        title={category.name}
                    ></CategorySelectButton>

                </Fields>

                <Button
                    onPress={handleSubmit(handleRegister)}
                    title="Enviar" />

            </Form>
            <Modal
                onRequestClose={handleCloseSelectCategoryModal}
                animationType='slide'
                visible={categoryModalOpen}
                statusBarTranslucent={true}
            >
                <CategorySelect
                    category={category}
                    setCategory={setCategory}
                    closeSelectCategory={handleCloseSelectCategoryModal}
                />
            </Modal>


        </Container>
    );
}