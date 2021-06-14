import  styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { TouchableOpacity } from 'react-native';

export const Container = styled(TouchableOpacity)`
    background-color: ${({ theme }) => theme.colors.secondary};
    width: 100%;
    border-radius: 5px;

    align-items: center;
    justify-content: center;

    padding:17px;
`;

export const Title =styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(14)}px;

    
`;