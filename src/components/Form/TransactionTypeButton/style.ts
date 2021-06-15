import styled,{css} from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';

interface IconProps {
    type: 'up' | 'down'
}
interface ContainerProps {
    isActive: boolean;
    type: 'up' | 'down'
}

export const Container = styled(TouchableOpacity) <ContainerProps>` 
    width: 48%;
    flex-direction: row;
    align-items: center;

    background-color: white;

    border-radius: 5px;
    border-style: solid;
    border-width:${({isActive})=> isActive ? 0: 1.5}px;
    border-color:${({ theme }) => theme.colors.text};

    padding: ${RFValue(16)}px ${RFValue(29)}px;

    ${({ isActive, type }) => isActive && type === 'down' && css`
    background-color: ${({theme})=>theme.colors.attention_light};
    
    `}
    ${({ isActive, type }) => isActive && type === 'up'&& css`
    background-color: ${({theme})=>theme.colors.succes_light};
    
    `}
   


`;
export const Icon = styled(Feather) <IconProps>`
    font-size: ${RFValue(24)}px;
    color: ${({ theme, type }) =>
        type === 'up' ? theme.colors.succes : theme.colors.attention};
    margin-right:12px;
 `;

export const Title = styled.Text`

    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(14)}px;
`;

