import styled from 'styled-components/native';
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
    padding: 0 25px;
    width: 100%;
    margin-top: 26px;
    background-color: yellowgreen;
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
  color: ${({ Theme }) => theme.colors.shape};
 `;
