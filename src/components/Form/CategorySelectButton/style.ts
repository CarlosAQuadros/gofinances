import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import { RFValue } from 'react-native-responsive-fontsize';
import { RectButton } from "react-native-gesture-handler";


export const Container = styled(RectButton).attrs({
    activeOpacity: 0.7
})`
    width: 100%;

    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    background-color: ${({ theme }) => theme.colors.shape};
    border-radius: 5px;

    padding: ${RFValue(18)}px ${RFValue(16)}px;
    margin-top: ${RFValue(16)}px;
`;
export const Category = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(14)}px;
`;
export const Icon = styled(Feather)`
    font-size: ${RFValue(18)}px;
`;