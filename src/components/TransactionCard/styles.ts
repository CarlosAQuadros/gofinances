import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons'
import { RFValue, RFPercentage } from 'react-native-responsive-fontsize';

interface TransactionProps {
    type: 'positive' | 'negative';
}


export const Container = styled.View`
    background-color: ${({ theme }) => theme.colors.shape};
    border-radius: 5px;
    padding: 17px 24px;
    margin-bottom:16px;
`;
export const Title = styled.Text`
    font-size: ${RFValue(14)}px;
`;
export const Amount = styled.Text<TransactionProps>`
 font-family: ${({ theme }) => theme.fonts.regular};
 font-size: ${RFValue(20)}px;
 margin-top: 2px;
 color: ${({ theme, type }) =>
        type === "positive" ? theme.colors.succes : theme.colors.attention};
`;
export const Footer = styled.View`
flex-direction: row;
justify-content: space-between;

`;
export const Icon = styled(Feather)`
 font-size: ${RFValue(20)}px;
 color: ${({ theme }) => theme.colors.text};

`;
export const Category = styled.View`
flex-direction: row;
justify-content: space-around;
align-items: center;

`;
export const CategoryName = styled.Text`
    color: ${({ theme }) => theme.colors.text};

    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(14)}px;

    margin-left:17px;
`;
export const Date = styled.Text`
    color: ${({ theme }) => theme.colors.text};
`;
