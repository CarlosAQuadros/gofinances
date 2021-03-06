import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons'
import { FlatList } from 'react-native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'
import {BorderlessButton} from 'react-native-gesture-handler'

import { DataListProps } from '.'

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.background};

`;

export const Header = styled.View`
    height: ${RFPercentage(42)}px;
    background-color: ${({ theme }) => theme.colors.primary};
   
`;
export const UserWrapper = styled.View`
    justify-content: space-between;
    align-items: center;
    flex-direction: row;

    padding: 0 25px;
    width: 100%;
    margin-top: 58px;
   
`;

export const UserInfo = styled.View`
    flex-direction: row;
    align-items: center;
 `;
export const UserImage = styled.Image`
    width: ${RFValue(48)}px;
    height: ${RFValue(52)}px;
    border-radius: 10px;
 `;
export const User = styled.View`
    margin-left: 17px;
 `;
export const UserGreetingg = styled.Text`
    color: ${({ theme }) => theme.colors.shape};
    font-size:${RFValue(18)}px;
    font-family: ${({ theme }) => theme.fonts.regular};
 `;
export const UserName = styled.Text`
    font-size:${RFValue(18)}px;
    font-family: ${({ theme }) => theme.fonts.bold};
    color: ${({ theme }) => theme.colors.shape};
 `;

export const LogoutButton = styled(BorderlessButton)`
    
`;

export const Icon = styled(Feather)`
    color: ${({ theme }) => theme.colors.secondary};
    font-size: ${RFValue(24)}px;
 `;
export const HighlightCards = styled.ScrollView.attrs({
    horizontal: true,
    showsHorizontalScrollIndicator: false,
    contentContainerStyle: { paddingHorizontal: 24 }
})`
    width: 100%;
    position: absolute;
    margin-top: ${RFPercentage(20)}px;
`;
export const Transactions = styled.View`
    flex: 1%;
    padding:0 24px;

    margin-top: ${RFPercentage(12)}px;
`;
export const Title = styled.Text`
    margin-bottom: 16px;
    font-size: ${RFValue(18)}px;
    font-family: ${({ theme }) => theme.fonts.regular};
`;

export const TransactionList = styled(
    FlatList as new () => FlatList<DataListProps>
).attrs({
    showsVerticalScrollIndicator: false,
    contentContainerStyle: {
        paddingBottom: 20,
    }
})`

`;
export const LoadContainer = styled.View`
    flex:1;
    align-items: center;
    justify-content: center;
`;
