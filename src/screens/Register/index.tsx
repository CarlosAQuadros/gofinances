import React, { useState, useEffect } from 'react';
import {
    Keyboard,
    Modal,
    TouchableWithoutFeedback,
    Alert
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { useForm } from 'react-hook-form'
import { InputForm } from '../../components/Form/inputForm';
import { Button } from '../../components/Form/Button/'
import { TransactionTypeButton } from '../../components/Form/TransactionTypeButton';
import { CategorySelectButton } from '../../components/Form/CategorySelectButton';
import { CategorySelect } from '../CategorySelect';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";


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

const schema = yup.object().shape({
    name: yup
        .string()
        .required('Nome é obrigatório'),
    amount: yup
        .number()
        .typeError('informe um valor numérico')
        .positive('o valor não pode ser negativo')
        .required('o valor é obrigatório')
});

const dataKey = '@gofinances:transactions'

export function Register() {



    const [category, setCategory] = useState({
        key: 'category',
        name: 'categoria',

    })

    const [transactionType, setTransactiontype] = useState('');
    const [categoryModalOpen, setCategoryModalOpen] = useState(false)


    const {
        control,
        handleSubmit,
        formState: { errors }

    } = useForm({
        resolver: yupResolver(schema)
    });


    async function handleRegister(form: formData) {
        if (!transactionType)
            return Alert.alert('selecione o tipo de transação!')

        if (category.key === 'category')
            return Alert.alert('selecione a categoria')

        const newTransaction = {
            name: form.name,
            amount: form.amount,
            transactionType,
            category: category.name
        }
        try {
            const data = await AsyncStorage.getItem(dataKey)
            const currentData = data ?JSON.parse(data):[];

            const dataFormatted = [
                ...currentData,
                newTransaction
            ]

            await AsyncStorage.setItem(dataKey, JSON.stringify(dataFormatted));

        } catch (error) {
            console.log(error);
            Alert.alert('nao foi possivel cadastrar')

        }

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


    useEffect(() => {
        async function loadData() {
            const data = await AsyncStorage.getItem(dataKey);
            console.log(JSON.parse(data!));

        }
        loadData()

        //async function removeAll() {
        //    const data = await AsyncStorage.removeItem(dataKey);
//
        //}
        //removeAll()


    }, [])


    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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
                            keyboardType='email-address'
                            error={errors.name && errors.name.message}

                        ></InputForm>
                        <InputForm
                            name="amount"
                            control={control}
                            placeholder='Preço'
                            error={errors.amount && errors.amount.message}

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
        </TouchableWithoutFeedback>
    );
}