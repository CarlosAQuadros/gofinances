import React from 'react';

import { RectButtonProps } from 'react-native-gesture-handler';
import {
    Container,
    Title
} from './style';

interface props extends RectButtonProps {
    title: string;
    onPress: () => void;
}
export function Button({
    title,
    onPress,
    ...rest
}: props) {
    return (
        <Container onPress={onPress} {...rest}>
            <Title>{title}</Title>
        </Container>
    )
}
