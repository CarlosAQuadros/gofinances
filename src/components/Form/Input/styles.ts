import styled  from 'styled-components/native';
import { TextInput } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';


export const Container =styled(TextInput)`
    padding: ${RFValue(16)}px ${RFValue(18)}px;
    width: 100%;

    font-size: ${RFValue(14)}px;
    font-family: ${({ theme }) => theme.fonts.regular};

    color:${({ theme }) => theme.colors.text_dark}; ;

    background-color: ${({theme})=>theme.colors.shape};

    border-radius:5px;
    margin-bottom: 8px;


`;
