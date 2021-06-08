import styled from 'styled-components/native';
import { FontAwesome  } from '@expo/vector-icons'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'
import theme from '../../global/styles/theme';

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
 export const Icon = styled(FontAwesome)`
    color: ${({ theme }) => theme.colors.secondary};
    font-size: ${RFValue(24)}px;
 `;
